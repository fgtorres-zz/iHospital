// var http = require('http');
var path = require('path');
// require('express-group-routes');
var request = require('request');
var express = require('express');
var hospitais = require("./novosHospitais.json");

var app = express();
console.log();




app.get('/api/geoloc/:lat&:lng',function(req ,res){

    var lat = req.params.lat;
    var lng = req.params.lng; 
    var location = "";
    url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key=AIzaSyD3NMww_sJGAPvB4fRWp2pVe86VzRXOS00';
     
    /* res.send(url); */
   
    request.get(url,function(error, response , body){
        
        if (!error){
             var resp = JSON.parse(body);
                   
            /* res.json(resp.results[0].address_components[4].long_name); */
            if (resp.results[0].address_components[4].long_name !="Brazil"){ 
                location = resp.results[0].address_components[4].long_name;
            }else{
                location = resp.results[0].address_components[2].long_name;
            }

        }
        console.log(location.toUpperCase());
        
        var resposta = [];
        for(i=0; i<hospitais.records.length;i++){
            
            if(hospitais.records[i].cidade ===location.toUpperCase()){
                resposta.push(hospitais.records[i]);
            }
        } 
        
        res.send(resposta);
        

    });
        
});




app.listen(8080 , function(){
    
    console.log('Servidor Iniciando na Porta 8080');

});

