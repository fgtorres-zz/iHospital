#arquivo que deseja unir
f = open('url_hospitais.txt','r')
#arquivo principal
v = open('geral.txt','r')
#resultado dos dois
r = open('geralzao.txt','w')
arquivo_a_unir = f.readlines()
arquivo_principal = v.readlines()
#Para funcionar separe por espaço os hospitais e atributos!!!
z=0
for a in range (0,len(arquivo_principal)):
    if(arquivo_principal[a]!='\n'):
        r.write(arquivo_principal[a])
    else:
        r.write(arquivo_a_unir[z])
        z+=1
        r.write('\n')
    
f.close()
v.close()
r.close()
