from Locais import LocaisGoogleMaps
from math import cos, asin, sqrt

def diferencaentrelocais(locais1, locais2):
    lat1 = locais1.getLatitude()
    lat2 = locais2.getLatitude()
    long1 = locais1.getLongitude()
    long2 = locais2.getLongitude()

    #Haversine formule
    p = 0.017453292519943295  # Pi/180
    a = 0.5 - cos((lat2 - lat1) * p) / 2 + cos(lat1 * p) * cos(lat2 * p) * (1 - cos((long2 - long1) * p)) / 2

    #return in km
    return 12742 * asin(sqrt(a))  # 2*R*asin...

