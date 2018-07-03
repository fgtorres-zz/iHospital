import React from 'react';
import { View } from 'react-native';
import { MapView, Location, Permissions } from 'expo';
import hospIcon from './hosp.png';
import Dimensions from 'Dimensions';
import dadosJson from '../dados';

const { height } = Dimensions.get('window');

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: dadosJson.two,
      location: null,
      errorMessage: null,
    };
  }
  componentWillMount() {
    this._getLocationAsync();
  }
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  }
  render() {
    const { dados, location } = this.state;
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
              image={hospIcon}
            />
          ))}
          {location && (
            <MapView.Marker
              key={'0001111'}
              coordinate={{latitude:location.coords.latitude, longitude:location.coords.longitude}}
              title={'Sua localização'}
            />
          )}
        </MapView>
      </View>
    );
  }
}