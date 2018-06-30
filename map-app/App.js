import React from 'react';
import Main from './src/screens/Main';
import { View, Dimensions } from 'react-native';
import { Header } from 'react-native-elements';
import Footer from './src/components/Footer';

const { height } = Dimensions.get('window');

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          backgroundColor='#8C513B'
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'iHospital', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Main />
        <Footer />
      </View>
    );
  }
}
