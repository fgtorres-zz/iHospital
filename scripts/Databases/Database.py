import  os
from abc import abstractmethod

#Esta classe tem por objetivo lidar com a atualização das bases utilizadas no iHospital
class Database:

    def __init__(self, name, link, filetype, dbdir):
        self.name = name;
        self.link = link;
        self.filetype = filetype;
        self.dbdir = dbdir;
