import requests
import json

class LocaisGoogleMaps:

    def __init__(self, name):
        self.location = self.getGoogleMapsDatabyCEP(name)

    def getGoogleMapsDatabyCEP(self, CEP):
        url = "https://geocoder.cit.api.here.com/6.2/geocode.json?app_id=C6ooizxM0OzLdxXz9s1l&app_code=n7IqZmnADjSGjmKGT_JSAQ&searchtext=" + CEP
        rs = requests.get(url)
        content = rs.content.decode('utf8')
        # content = rs.content.decode('utf8').replace("'", '"')
        page_json = json.loads(content)
        return page_json

    def getLatitude(self):
        return self.location['Response']['View'][0]['Result'][0]['Location']['DisplayPosition']['Latitude']

    def getLongitude(self):
        return self.location['Response']['View'][0]['Result'][0]['Location']['DisplayPosition']['Longitude']

    def getLocation(self):
        return self.location

    def getPais(self):
        return self.location['Response']['View'][0]['Result'][0]['Location']['Address']['Country']

    def getLogradouro(self):
        return self.location['Response']['View'][0]['Result'][0]['Location']['Address']['Label']

    def getEstado(self):
        return self.location['Response']['View'][0]['Result'][0]['Location']['Address']['State']

    def getCidade(self):
        return self.location['Response']['View'][0]['Result'][0]['Location']['Address']['City']

    def getCodigoPostal(self):
        return self.location['Response']['View'][0]['Result'][0]['Location']['Address']['PostalCode']

