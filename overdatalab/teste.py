import json
from modulos.maps import HospFinder

teste = HospFinder.HospFinder('Hospital Geral Do Estado')

print('endereco: '+teste.getAddress())
print('Bairro: '+teste.getDistrict())
print('CEP: '+teste.getPostalCode())
print('Rua: '+teste.getStreet())
print("Lat/Lng: "+teste.getLocation())
print('lat: '+teste.getLatitude())
print('lng: '+teste.getLongitude())


