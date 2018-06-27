import React from 'react';
import Main from './src/screens/Main';
import { View } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'iHospital', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Main />
      </View>
    );
  }
}
