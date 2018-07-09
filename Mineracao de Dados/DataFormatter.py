import json

r = open('Estabelecimentos.json','r')
w = open('SemGeoloc.json','w')

i=0 

containers = json.loads(r.read())

w.write('{\n"RERCORDS":[')
for container in containers['RECORDS']:
    if(container['NU_LATITUDE']== None or container['NU_LONGITUDE'] == None):
        print(i)
        i+=1
        w.write(json.dumps(container))
        w.write('\n,')
w.write(']}')
