import React from 'react';
import Main from './src/screens/Main';
import MapScreen from './src/screens/MapScreen';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import { createBottomTabNavigator } from 'react-navigation';

const RootStack = createBottomTabNavigator(
  {
    Home: Main,
    Map: MapScreen,
  },
  {
    initialRouteName: 'Home',
    tabBarOptions:{
      activeTintColor: '#ffffff',
      inactiveTintColor: 'rgba(255, 255, 255, .5)',
      style: {
        backgroundColor: 'rgba(51, 122, 183, 1)',
      },
    }
  }
);


export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          backgroundColor='#337ab7'
          centerComponent={{ text: 'iHospital', style: { color: '#ffffff', fontSize: 18 } }}
        />
        <RootStack />
      </View>
    );
  }
}