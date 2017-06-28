#!/usr/bin/python
# -*- coding: utf-8 -*-

TYTUL = '//h1//text()'

ID_OTO = '//p[contains(., "Nr oferty w Otodom:")]//text()'


NIEAKTUALNE ='//h4[contains(text(),"jest nieaktualne")]'
NIEDOSTEPNE = "//div[@id = 'ad-not-available-box']/h4"

LISTA_BASE = '//li[text()[contains(.,"{}")]]'
CENA_BASE = LISTA_BASE.format('cena')
CENA = CENA_BASE + '//strong/text()[1]'
CENA_M2 = CENA_BASE + '//text()[2]'
POWIERZCHNIA = LISTA_BASE.format('powierzchnia') + '//strong/text()'

MAIN_LINST = '//ul[contains(@class, "main-list")]//li[position()>1]'
MAIN_LIST_TEXT = MAIN_LINST + '//strong/text()'
MAIN_LIST_KATEGORIE = MAIN_LINST + '//li[position()>1]/text()'

SUB_LIST = '//ul[contains(@class, "sub-list")]'
SUB_LIST_KATEGORIE = SUB_LIST + '//li//strong/text()'
SUB_LIST_TEXT = SUB_LIST + '//li/text()'
FOOTER_LIST = ('//div[contains(@class, "right")]//p/text()' +
'| //div[contains(@class, "left")]//p[position()>1]/text()')

ADDITIONAL_PARAMS = '//ul[contains(@class, "params-list")]/li[position()>1 and position()<last()]'
ADDITIONAL_PARAMS_KATEGORIE = ADDITIONAL_PARAMS + '/h4/text()'
ADDITIONAL_PARAMS_TEXT = ADDITIONAL_PARAMS + '/ul[descendant-or-self::text()]'

OPIS = '//div[@itemprop = "description"]//*'

IMAGE_URLS = '//div[contains(@class, "gallery-box-image" )]//div[contains(@class, "atlas-slider-content")]/a/@href'