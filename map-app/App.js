import React from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import Routes from './src/Routes';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          backgroundColor='#337ab7'
          centerComponent={{ text: 'iHospital', style: { color: '#ffffff', fontSize: 18 } }}
        />
        <Routes />
      </View>
    );
  }
}