import requests 
from bs4 import BeautifulSoup as soup

f = open('nome_hospitais.txt','r')
r = open('telefone_hospitais.txt','w')

hospitais = f.readlines()

for hospital in hospitais:
    #Leu os hospitais da lista para procurar dentro do google na url
    hospital = hospital.replace(' ',"+")
    url = "https://www.google.com.br/search?hl=pt-BR&ei=8XoIW8bIM8y0wASHir6ABA&q="+hospital+"&gs_l=psy-ab.3...17830.22076.0.22125.32.21.4.0.0.0.294.2740.0j10j5.15.0....0...1c.1.64.psy-ab..15.14.1578...0j35i39k1j0i131k1j0i67k1j0i10k1j0i203k1j0i13k1.0.INxrLeR5K7s"




    site = requests.get(url)
    html = site.content

    try:
        page_soup = soup(html , 'html5lib')
        site = page_soup.find()
        #O texto e a tag que quer que ele encontre
        container = page_soup.find(text='Telefone: ').findNext("span")
        print(hospital)
        print(container.text)
        r.write('Nome: '+hospital.replace('+'," ") + "\n")
        r.write('Telefone: '+container.text + "\n")
    except (Exception):
        print(hospital+"procura na mão")
        r.write('Nome: '+hospital.replace('+'," ") + "\n")
        r.write('Telefone: '+'procura na mão' +"\n")
