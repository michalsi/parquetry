#!/usr/bin/python
# -*- coding: utf-8 -*-

TYTUL = '//h1//text()'
LISTA_BASE = '//li[text()[contains(.,"{}")]]'

CENA_BASE = LISTA_BASE.format('cena')
CENA = CENA_BASE + '//strong/text()[1]' #TODO: class selectors
CENA_M2 = CENA_BASE + '//text()[2]'

ID_OTO = '//p[contains(., "Nr oferty w Otodom:")]//text()'

NIEAKTUALNE ='//h4[contains(text(),"jest nieaktualne")]'
NIEDOSTEPNE = "//div[@id = 'ad-not-available-box']/h4"

POWIERZCHNIA = LISTA_BASE.format('powierzchnia') + '//strong/text()'

SUB_LIST_KATEGORIE = '//ul[contains(@class, "sub-list")]//li//strong/text()'
SUB_LIST_TEXT = '//ul[contains(@class, "sub-list")]//li/text()'