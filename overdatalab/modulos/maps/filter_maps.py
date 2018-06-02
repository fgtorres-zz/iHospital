import json
import os
import shutil
import time
from .HospFinder import HospFinder



class Filter_Maps:
    
    

    def __init__(self,escolha):
        #Filtragem
        
        while escolha != '0':
            
            if escolha == '1':
                option_1()
                break
            
            elif escolha =='2':
                option_2()
                break


#Opções emulando o switch
def option_1():
    nome = input('Nome do Hospital: ').upper()
    cnes = input('CNES: ')
    hosp = HospFinder(nome)
    response = {}
    response['nome'] = nome
    response['address'] = hosp.getEndereco()
    response['CNES'] = cnes
    response['telefone'] = input('telefone: ')
    response['latLng'] = hosp.getLocation()
    response['Especialidades'] = input('Especialidades').split(',')
    response_json = json.dumps(response,ensure_ascii=False,sort_keys=True,indent=4 )
    nome_arquivo = input("Nome do Arquivo (Sem Extensao ) :")
    r = open(nome_arquivo+".json",'w')
    r.write(response_json)
    r.close()
    shutil.move(nome_arquivo+".json",'dados/jsons')
    print('Concluido cheque a pasta '+nome_arquivo)
    time.sleep(4)

def option_2():
    print('o arquivo deve estar no formato json')
    nome_arquivo = input('Nome do arquivo: ')+'.json'.strip()
    print(nome_arquivo)

    #ler arquivo

