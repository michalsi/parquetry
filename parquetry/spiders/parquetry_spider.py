from scrapy import Spider
from scrapy.selector import Selector

from parquetry.items import parquetryItem

from otoSelectors import *
from urls import *

class parquetrySpider(Spider):
    name = "parquetry"
   
    start_urls = urls

    def parse(self, response):

        item = parquetryItem()
        item['url'] = response.url
        item['tytul'] = Selector(response).xpath(TYTUL).extract()[0]
        
        not_available = self.extract_if_exists(
            Selector(response).xpath(NIEDOSTEPNE))
       
        if not_available:
            item['niedostepne'] = True 
            yield item
            return
   
        item['idOto'] = self.extract_digits(
            Selector(response).xpath(ID_OTO).extract()[0])
        item['cena'] = Selector(response).xpath(CENA).extract()[0]
        item['cenaM2'] = Selector(response).xpath(CENA_M2).extract()[0]

        item['sublista_kategorie'] =  Selector(response).xpath(SUB_LIST_KATEGORIE).extract()
        item['sublista_text'] =  Selector(response).xpath(SUB_LIST_TEXT).extract()
        item['nieaktualne'] = self.extract_if_exists(
            Selector(response).xpath(NIEAKTUALNE))
        
        yield item

    def extract_digits(self, string_to_process):
        new_string = string_to_process.encode('latin-1')
        return int(filter(str.isdigit, new_string))
    
    def extract_if_exists(self, sel):
        extracted_value = sel.extract()
        if extracted_value:
            return extracted_value[0]