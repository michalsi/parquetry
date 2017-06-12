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
        nieaktualne = Selector(response).xpath(NIEAKTUALNE)
        niedostepne = Selector(response).xpath(NIEDOSTEPNE)

        item = parquetryItem()
        item['url'] = response.url
        item['tytul'] = Selector(response).xpath(TYTUL).extract()[0]
        
        not_available = self.extract_if_exists(niedostepne)
       
        if not_available:
            item['niedostepne'] = True 
            yield item
            return
   
        item['idOto'] = self.extract_digits(idOto.extract()[0])
        item['cena'] = cena.extract()[0]
        item['cenaM2'] = cenaM2.extract()[0]

        item['nieaktualne'] = self.extract_if_exists(nieaktualne)
        yield item

    def extract_digits(self, string_to_process):
        new_string = string_to_process.encode('latin-1')
        return int(filter(str.isdigit, new_string))
    
    def extract_if_exists(self, sel):
        extracted_value = sel.extract()
        if extracted_value:
            return extracted_value[0]