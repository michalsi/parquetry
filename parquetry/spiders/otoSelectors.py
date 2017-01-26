LISTA_BASE = '//li[text()[contains(.,"{}")]]'

CENA_BASE = LISTA_BASE.format('cena')
CENA = CENA_BASE + '//strong/text()[1]'
CENA_M2 = CENA_BASE + '//text()[2]'

POWIERZCHNIA = LISTA_BASE.format('powierzchnia') + '//strong/text()'
