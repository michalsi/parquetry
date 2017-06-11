# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class parquetryItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    url = scrapy.Field()
    
    cena = scrapy.Field()
    cenaM2 = scrapy.Field()
    idOto = scrapy.Field()
    nieaktualne = scrapy.Field() # historical data visible
    niedostepne = scrapy.Field() #no historical data visible
    # url = Field()
    pass
