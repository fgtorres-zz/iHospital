import json

f = open('hospitais.json','r' , encoding='utf8').read()
r = open('nome_hospitais.txt','w')
arquivo_json = json.loads(f)

for linha in arquivo_json:
    nome_hospital=linha['nome']
    r.write(nome_hospital+'\n')
r.close()
