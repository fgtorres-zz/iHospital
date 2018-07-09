import requests
from threading import Thread 
from time import sleep
import json 

r = open('SemGeoloc.json','r')
w = open('Hospitais.json','w')

w.write('[\n')

def getGeoloc(data):
    estab = data['NO_FANTASIA'] + data['NO_MUNICIPIO']
    estab = estab.replace(' ','+')
    estab = estab.replace("'",'')
    url = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyD3NMww_sJGAPvB4fRWp2pVe86VzRXOS00&new_forward_geocoder=true&address="+estab+"&components=country:BR"
    rs = requests.get(url)
    content = rs.content.decode('utf8')
        
    page_json = json.loads(content)
    obj = page_json['results'][0]['geometry']['location']
    generateData(data, obj)


def generateData(line , obj):
    jsona = {}
    jsona['address'] = line['NO_LOGRADOURO'] + " - "+line['NO_BAIRRO']+" - "+" , "+line['NO_MUNICIPIO']+" - "+line['CO_SIGLA_ESTADO']+", "+line['CO_CEP']+", Brazil"
    jsona['UF'] = line['CO_SIGLA_ESTADO']
    jsona['cidade'] = line['NO_MUNICIPIO']
    jsona['CNES'] = int(line['CO_CNES'])
    jsona['nome'] = line['NO_FANTASIA']
    jsona['latLng'] = obj
    w.write(json.dumps(jsona,ensure_ascii=False,sort_keys=True,indent=4)+",\n")

i=0
containers = json.loads(r.read())
for container in containers['RECORDS']:
    sleep(0.0000000000001)
    thread = Thread(target=getGeoloc, args=(container,))
    thread.start()
    thread.join()
    i+=1
    print(i)
    if(i == 2500):
        break