# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html

import pymongo

from scrapy.conf import settings
from scrapy.exceptions import DropItem
import logging

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
            document_in_db = self.get_doc_if_exist(item)
            if document_in_db :
                print 'update'
                print document_in_db
                print '==============================='
                print 'LIST TO UPDATE:'
                print '==============================='
                print self.compare_items(item,document_in_db)
                print '==============================='
            else:
                print 'insert'
                # self.collection.insert(dict(item))
            
            logging.debug('parquetry data added to MongoDB database! ')
            # logging.debug(dict(item))
            
        return item

    def get_doc_if_exist(self,item):
        return self.collection.find_one({'idOto': item['idOto']})

    # def update_document_in_db(self, document_in_db, items_to_update):
    #     # new item
    #     # update existing item (leave previous one. add maybe timestamp)

    def compare_items(self, items, doc_in_db):
        records_to_insert = {}
        for key in items.keys():
            if key in doc_in_db.keys():
                if items[key] != doc_in_db[key]:
                    print 'Different values !! items: '
                    print items[key] 
                    print 'In DB: '
                    print doc_in_db[key]
                    records_to_insert[key] = items[key]
                    records_to_insert[key +'_'+self.timestamp] = doc_in_db[key]
            else:
                records_to_insert[key] = items[key]
        return records_to_insert

        print 'Common elements:'
        for item in shared_items:
            print item