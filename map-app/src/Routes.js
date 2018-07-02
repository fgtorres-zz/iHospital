import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Main from './screens/Main';
import MapScreen from './screens/MapScreen';
import Hospital from './screens/Hospital';

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

const MainScreenNavigator = createStackNavigator({

    Hospital: { screen: Hospital },
    Tab: RootStack,
  },
  {
    initialRouteName: 'Tab',
    headerMode: 'none'
  });

export default MainScreenNavigator;