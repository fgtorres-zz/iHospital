import React from 'react';
import Map from '../components/Map';
import { Icon } from 'react-native-elements'

export default class MapScreen extends React.Component{
  static navigationOptions = {
    title: 'Mapa',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='map' color={tintColor} />
    ),
  }
  render(){
    return (
      <Map />
    )
  }
}