# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html

import pymongo

from scrapy.conf import settings
from scrapy.exceptions import DropItem
import logging
from scrapy.selector import Selector

import datetime


class MongoDBPipeline(object):

    def __init__(self):
        self.timestamp = '{:%Y%m%d%H%M}'.format(datetime.datetime.now())
        
        connection = pymongo.MongoClient(
            settings['MONGODB_SERVER'],
            settings['MONGODB_PORT']
        )
        db = connection[settings['MONGODB_DB']]
        self.collection = db[settings['MONGODB_COLLECTION']]
        self.collection.ensure_index('idOto', unique=True)


    def process_item(self, item, spider):
        valid = True
        for data in item:
            if not data:
                valid = False
                raise DropItem("Missing {0}!".format(data))
        if valid:
            if 'niedostepne' in item :
                self.process_not_available(item['url'])
                return
            
            self.extract_items_from_list(item, 'mainlista')
            self.extract_items_from_list(item, 'sublista')            
            self.extract_items_from_list(item, 'additional_params')
            self.extract_footer_items(item)
            
            self.update_or_insert_items_in_db(item)
      
            logging.debug('parquetry data added to MongoDB database! ')


    def process_not_available(self, url):
        if self.collection.find_one({'url': url}, 
                                    { 'niedostepne': { '$elemMatch': {'$ne': None} } } 
                                    ):
            return
        else:
            if self.collection.find_one({'url': url}):
                self.collection.update_one({"url": url}
                                           ,{"$set": {'niedostepne': self.timestamp}}
                                           )
            else:
                self.collection.insert({"url": url,'niedostepne': self.timestamp})
      
    def extract_items_from_list(self,item, list_name):
        category_list = (list_name + '_kategorie')
        text_list = (list_name + '_text')
        for index, element in enumerate(item[category_list]):
            item[element] = item[ text_list][index]
 
        item.__delitem__(category_list)
        item.__delitem__( text_list)

    def extract_footer_items(self,item):
        for element in item['footer_list']:
            category = element.split(':')[0].strip()
            value = element.split(':')[1].strip()
            item[category] = value
        item.__delitem__( 'footer_list')
        

    def update_or_insert_items_in_db(self, item):
        document_in_db = self.get_doc_if_exist(item)
        if document_in_db:
            items_to_update = self.get_diff_items(item, document_in_db)
            if items_to_update:
                self.update_document_in_db(item['idOto'], items_to_update)
        else:
            logging.info('inserting new entry')
            self.collection.insert(dict(item))
            logging.info(item)
            
    def get_doc_if_exist(self,item):
        return self.collection.find_one({'idOto': item['idOto']})

    def update_document_in_db(self, oto_id, items_to_update):
        self.collection.update_one(
        {"idOto": oto_id},
        {"$set": items_to_update}
        )
        logging.info('updated oto ID: ' + str(oto_id) + ' with new valuses: ')
        logging.info( items_to_update)

    def get_diff_items(self, items, doc_in_db):
        records_to_insert = {}
        for key in items.keys():
            if key in doc_in_db.keys():
                if items[key] != doc_in_db[key]:
                    records_to_insert[key] = items[key]
                    records_to_insert[key +'_' + self.timestamp] = doc_in_db[key]
            else:
                records_to_insert[key] = items[key]
        return records_to_insert