
#importando extensões
import os
import time

#importando modulo
from modulos.maps import Locais

def menu_apresentacao():
    print("########################################################################################################################\n"
       +'\t########    ##     ##   ########    #########           #######      ######     ###########    ######\n'
       +'\t##    ##    ##     ##   ##          ###    ##           ##    ##    ########    ###########   ########\n'       
       +'\t##    ##    ##     ##   ########    ##     ##           ##     #    ##    ##        ###       ##    ##\n'
       +'\t##    ##    ##     ##   ########    #########           ##     #    ##    ##        ###       ##    ##\n'
       +'\t##    ##     ##   ##    ##          ##     ##           ##    ##    ########        ###       ########\n'
       +'\t########       ###      ########    ##      ##          ######      ##    ##        ###       ##    ##\n'         
+"#########################################################################################################################\n")
def menu_principal():    
    print('1- Gerar Json Hospitais')
    print('2- Gerar Json Pacientes')
    print('3- Gerar Geolocalização Hospitais')
    print('4- Gerar Geolocalização Pacientes')
    print('0- Para Sair')
    print('---------------------------------')
    
def clear ():
    os.system('cls')







pasw = input('password: ')
if pasw =="overdata2018":
    menu_apresentacao()
    menu_principal()    
    
    escolha = input ('entry:')
    
    while escolha != '0':
        menu_principal()    
        escolha = input ('entry:')
        clear()
        
    if escolha == '0':
        print('Saindo do Programa ...')
        time.sleep(3)
        clear()
    
