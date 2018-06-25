import React from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import Map from '../components/Map';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxSmall: {
    width: 200,
    height: 200,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'skyblue',
  },
  boxLarge: {
    width: 300,
    height: 300,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: 'steelblue',
  },
});

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Map />
        {/* <ScrollView  style={styles.container}>
          <View style={styles.boxLarge} />
          <ScrollView horizontal>
            <View style={styles.boxSmall} />
            <View style={styles.boxSmall} />
            <View style={styles.boxSmall} />
          </ScrollView>
          <View style={styles.boxLarge} />
          <View style={styles.boxSmall} />
          <View style={styles.boxLarge} />
        </ScrollView> */}
      </View>

    )
  }
}

