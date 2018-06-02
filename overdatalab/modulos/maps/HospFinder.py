import requests
import json

class HospFinder:
    def __init__(self,name):
        name = name.replace(' ','+')
        self.location = self.FindHospByName(name)

    def FindHospByName(self,name):
        url = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyD3NMww_sJGAPvB4fRWp2pVe86VzRXOS00&new_forward_geocoder=true&address="+name+"&components=country:BR"
        rs = requests.get(url)
        content = rs.content.decode('utf8')
        
        page_json = json.loads(content)
        
        return page_json

    def getEndereco(self):
        return self.location['results'][0]['formatted_address']

    def getCodigoPostal(self):
        return self.location['results'][0]['address_components'][6]['short_name']

    def getRua(self):
        return self.location['results'][0]['address_components'][1]['short_name']
    
    def getBairro(self):
        return self.location['results'][0]['address_components'][2]['short_name']
    
    def getLocation(self):
        return  self.location['results'][0]['geometry']['location']
    
    def getLatitude(self):
        return  str(self.location['results'][0]['geometry']['location']['lat'])

    def getLongitude(self):
        return str( self.location['results'][0]['geometry']['location']['lng'])
    

    
    
