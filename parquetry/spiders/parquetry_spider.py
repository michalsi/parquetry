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
        idOto= Selector(response).xpath(ID_OTO)
        
        print("==================================")
        item = parquetryItem()
        # if page outdated - set outdated date and yield item 
        item['cena'] = cena.extract()[0]
        item['cenaM2'] = cenaM2.extract()[0]

        item['idOto'] = self.extract_digits(idOto.extract()[0])

        yield item

    def extract_digits(self, string_to_process):
        new_string = string_to_process.encode('latin-1')
        return int(filter(str.isdigit, new_string))