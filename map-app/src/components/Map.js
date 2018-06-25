import React from 'react';
import { View } from 'react-native';
import { MapView, Marker } from 'expo';
import Dimensions from 'Dimensions';
import dadosJson from '../dados';

const { height } = Dimensions.get('window');
const hardLocation = {latitude: 37.78825, longitude: -122.4324}

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dados: dadosJson.two};
  }
  render() {
    const { dados } = this.state
    return (
      <View>
        <MapView
          style={{ alignSelf: 'stretch', height }}
          initialRegion={{ latitude: -12.941456, longitude: -38.479563, latitudeDelta: 0.38, longitudeDelta: 0.12, }}
        >
          {dados.map(marker=>(
            <MapView.Marker
              key={marker.CNES}
              coordinate={{latitude:marker.latLng.lat, longitude:marker.latLng.lng}}
              title={marker.nome}
              description={marker.address}
            />
          ))}
        </MapView>

      </View>
    );
  }
}