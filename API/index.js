// var http = require('http');
var path = require('path');
// require('express-group-routes');
var request = require('request');
var express = require('express');
var app = express();





app.get('/api/geoloc/:lat/:lng',function(req ,res){

    var lat = req.params.lat;
    
    var lng = req.params.lng;
     

    url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key=AIzaSyD3NMww_sJGAPvB4fRWp2pVe86VzRXOS00';
     
    /* res.send(url); */    

   request(url,function(error, response , body){
        

    if (!error){
         JSON.parse(body);
               
        res.json(resp.results[0].address_components[4].long_name);
        }



    });

    
    
    

});




app.listen(8080 , function(){
    
    console.log('Servidor Iniciando na Porta 8080');

});

