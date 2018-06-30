import React from 'react';
import Main from './src/screens/Main';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import Footer from './src/components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          backgroundColor='#337ab7'
          centerComponent={{ text: 'iHospital', style: { color: '#ffffff', fontSize: 18 } }}
        />
        <Main />
        <Footer />
      </View>
    );
  }
}
