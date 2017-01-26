from scrapy import Spider
from scrapy.selector import Selector

from parquetry.items import parquetryItem

from otoSelectors import *

class parquetrySpider(Spider):
    name = "parquetry"
    # allowed_domains = ["stackoverflow.com"]
    start_urls = [
        "https://www.otodom.pl/oferta/mieszkanie-66-60-m-gdansk-ID3a0bu.html#gallery[1]",
    ]

    def parse(self, response):
        # LISTA_BASE = '//li[text()[contains(.,"{}")]]'
        
        # CENA_BASE = LISTA_BASE.format('cena')
        # CENA = CENA_BASE + '//strong/text()[1]'
        # CENA_M2 = CENA_BASE + '//text()[2]'

        # POWIERZCHNIA = LISTA_BASE.format('powierzchnia')+ '//strong/text()'

        cena = Selector(response).xpath(CENA)
        cenaM2 = Selector(response).xpath(CENA_M2)
        
        print("==================================")
        item = parquetryItem()
        item['cena'] = cena.extract()[0]
        item['cenaM2'] = cenaM2.extract()[0]

        yield item