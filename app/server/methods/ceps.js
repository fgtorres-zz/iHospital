Meteor.methods({
    getAddress:(cepArray)=>{
        cepArray = ['41741550', '41830380', '44490000']
        let address = cepArray.map((cep)=>{
            const url = 'https://viacep.com.br/ws/' + cep + '/json/ '
            HTTP.call('GET', url, (error, result) => {
                if (!error) {
                    console.log('****> result',result);
                }
            });
        });
        
    }
});