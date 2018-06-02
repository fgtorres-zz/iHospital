
#importando extensões
import os
import time

#importando modulo
from modulos.maps import filter_maps 

#Viadagem

    
                                             
                                             
#Viadagem Também
def menu_principal():    
    print("##############################################################\n"
    +"\t _____                      _       _     \n" 
    +"\t|  _  |                    | |     | |        \n"
    +"\t| | | |_   _____ _ __    __| | __ _| |_ __ _  \n"
    +"\t| | | \ \ / / _ \ '__|  / _` |/ _` | __/ _` | \n"
    +"\t\ \_/ /\ V /  __/ |    | (_| | (_| | || (_| | \n"
    +"\t \___/  \_/ \___|_|     \__,_|\__,_|\__\__,_| \n"
    +"\n##############################################################")
    print('1- Gerar Json Hospitais')
    print('2- Gerar Json Pacientes')
    print('0- Para Sair')
    print('---------------------------------')
    
def clear ():
    os.system('cls')

def menu_maps():
    print('1- Local de um hospital para salvar\n')
    print('2- Locais de varios hospitais para salvar\n')
    print('0- Voltar ao menu principal')





# Inicio
escolha = 16
pasw = input('password: ')
if pasw =="overdata2018":   
    
    #Corpo do Programa
    while escolha != '0':
        menu_principal()    
        escolha = input ('entry:')
        clear()

        if escolha =='1':
            clear()
            menu_maps()
            esc = input('entry_maps: ')
            filter_maps.Filter_Maps(esc)

















        if escolha == '0':
            print('Saindo do Programa ...')
            time.sleep(3)
            clear()
    
