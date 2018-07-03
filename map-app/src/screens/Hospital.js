import React from 'react';
import { Text, Platform } from 'react-native'
import { Card, Button, Icon } from 'react-native-elements'
import { MapView, Linking, Location, Permissions } from 'expo';
import hospIcon from '../components/hosp.png';

export default class Hospital extends React.PureComponent {
  static navigationOptions = {
    title: 'Hospital',
  }
  constructor(props) {
    super(props);
    this.state = {
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
  render(){
    const { location } = this.state;
    const hospital = this.props.navigation.state.params.hospital;
    const lat = hospital.latLng.lat;
    const lng = hospital.latLng.lng;
    const urlToGo = Platform.OS != 'android' && location ? 'maps://app?saddr='+location.coords.latitude+'+'+location.coords.longitude+'&daddr='+lat+'+'+lng :  'google.navigation:q='+lat+'+'+lng;
    return (
      <Card title={hospital.nome} >
        <MapView
          style={{ alignSelf: 'stretch', height:200 }}
          initialRegion={{ latitude: lat, longitude: lng, latitudeDelta: 0.0922, longitudeDelta: 0.0421, }}
        >
          <MapView.Marker
            coordinate={{latitude:lat, longitude:lng}}
            title={hospital.nome}
            image={hospIcon}
          />
          {location &&
            <MapView.Marker
              key={'0001111'}
              coordinate={{latitude:location.coords.latitude, longitude:location.coords.longitude}}
              title={'Sua localização'}
            />}
        </MapView>

        <Text style={{marginBottom: 10}}>
          {hospital.address}
        </Text>

        {location ? (
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#337ab7'
            buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 10}}
            title='Traçar rota'
            onPress={() => { Linking.openURL(urlToGo) }}
          />
        ):
        (<Button
            loading
            loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
            title='Carregando Sua Localização'
            titleStyle={{ fontWeight: "700" }}
            buttonStyle={{
              height:45,
              backgroundColor: "#337ab7",
              borderColor: "transparent",
              borderRadius: 10,
              marginBottom: 10
            }}
          />)}

        <Button
          icon={<Icon name='code' color='#ffffff' />}
          backgroundColor='#337ab7'
          buttonStyle={{borderRadius: 10, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='Voltar'
          onPress={() => { this.props.navigation.goBack() }}
        />
      </Card>
    )
  }
}
