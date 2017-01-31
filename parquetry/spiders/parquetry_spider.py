from scrapy import Spider
from scrapy.selector import Selector

from parquetry.items import parquetryItem

from otoSelectors import *
from urls import *

class parquetrySpider(Spider):
    name = "parquetry"
   
    start_urls = urls

    def parse(self, response):

        cena = Selector(response).xpath(CENA)
        cenaM2 = Selector(response).xpath(CENA_M2)
        
        print("==================================")
        item = parquetryItem()
        item['cena'] = cena.extract()[0]
        item['cenaM2'] = cenaM2.extract()[0]

        yield item