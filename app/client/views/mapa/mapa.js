import jsons from '.dados.js';
globalMarkers = []
globalHosps = []

function setMapOnAll() {
    for (var i = 0; i < globalMarkers.length; i++) {
        globalMarkers[i].setMap(null);
    }
}

function pinPacientes(map, cnes=[]) {
    setMapOnAll();
    userJson.forEach((item)=>{
        if (cnes==item.CNES) {
            let marker = new google.maps.Marker({
                position: new google.maps.LatLng(item.latLng.Latitude, item.latLng.Longitude),
                map: map.instance,
                icon:'/icons/paciente.png'
            });    
            globalMarkers.push(marker);
        }
    });
    
}
function pinMap(map){
    let marker;
    jsonFinal.forEach((upa,index)=>{
        marker = new google.maps.Marker({
            draggable: false,
            position: new google.maps.LatLng(upa.latLng.lat, upa.latLng.lng),
            map: map.instance,
            icon:'/icons/hosp.png',
            zIndex:99999999
        });

        globalHosps.push(marker);
        
        marker.addListener('click', (e)=> {
            $('.hospital-name').text(upa.nome);
            globalHosps.forEach(item=>{
                item.setAnimation(null);
            });
            pinPacientes(map, upa.CNES);
            if (globalHosps[index].getAnimation() !== null) {
                globalHosps[index].setAnimation(null);
            } else {
                globalHosps[index].setAnimation(google.maps.Animation.BOUNCE);
            }
        });
    });

}

Template.mapa.onRendered(()=> {
    console.log("jsons",jsons)
    GoogleMaps.load({ v: '3', key: 'AIzaSyBv8ibiYpSEpCVP2HyRYF23j2Tiks-LUF4', libraries: 'geometry,places' });
    Meteor.call('getAddress', '41741550');
});

// AIzaSyBv8ibiYpSEpCVP2HyRYF23j2Tiks-LUF4
Template.mapa.onCreated(()=> {
    GoogleMaps.ready('map', function(map) {
        pinMap(map);
  });
});

Template.mapa.helpers({  
    mapOptions:()=> {
        if (GoogleMaps.loaded()) {
          return {
            center: new google.maps.LatLng(-12.941456, -38.479563),
            // center: new google.maps.LatLng(-12.894012, -38.429101),
            zoom: 12,
            mapTypeControl: false,
            gestureHandling: 'greedy',
        		mapTypeControl: false,
        		scaleControl: false,
        		streetViewControl: false,
        		rotateControl: false,
        		fullscreenControl: false,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#444444"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#aad2e3"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                }
            ]
          };
        }
    }
});
