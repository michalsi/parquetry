# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: http://doc.scrapy.org/en/latest/topics/item-pipeline.html

import pymongo

from scrapy.conf import settings
from scrapy.exceptions import DropItem
import logging


class MongoDBPipeline(object):

    def __init__(self):
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
            document = self.get_doc_if_exist(item)
            if document :
                print 'update'
                print document
                self.compare_items(item,document)
            else:
                print 'insert'
                # self.collection.insert(dict(item))
            
            logging.debug('parquetry data added to MongoDB database! ')
            # logging.debug(dict(item))
            
        return item

    def get_doc_if_exist(self,item):
        print ('*****************')
        return self.collection.find_one({'idOto': item['idOto']})

        print ads
        print ('*****************')

    def update_document_in_db(self, document_in_db, items_to_update):
        # new item
        # update existing item (leave previous one. add maybe timestamp)

    def compare_items(self, item1, item2):
        shared_items = set(item1.items()) & set(item2.items())

        print 'Common elements:'
        for item in shared_items:
            print item