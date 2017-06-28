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
    
    idOto = scrapy.Field()
    
    tytul = scrapy.Field()
    cena = scrapy.Field()
    cenaM2 = scrapy.Field()
    
    nieaktualne = scrapy.Field() # historical data visible
    niedostepne = scrapy.Field() #no historical data visible
    
    mainlista_kategorie = scrapy.Field()
    mainlista_text = scrapy.Field()
    sublista_kategorie = scrapy.Field()
    sublista_text = scrapy.Field()
    additional_params_kategorie = scrapy.Field()
    additional_params_text = scrapy.Field()
    footer_list = scrapy.Field()
    
    opis = scrapy.Field()
    
    id_biura = scrapy.Field()
    
    image_urls = scrapy.Field()
    images = scrapy.Field()
    galery = scrapy.Field()
    
    
    def __setitem__(self, key, value):
        if key not in self.fields:
            self.fields[key] = scrapy.Field()
        super(parquetryItem, self).__setitem__(key, value)
        
    pass
