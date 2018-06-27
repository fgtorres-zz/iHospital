import React from 'react';
import { FlatList, View, StyleSheet, Dimensions } from 'react-native';
import { Avatar, Text, SearchBar } from 'react-native-elements';

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  containerSearch: {
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
    marginBottom: 20,
  },
  inputSearch: {
    backgroundColor: '#eee',
    marginHorizontal: 10,
    marginBottom: 12,
  },
  scrollView: {
    backgroundColor: '#000',
    paddingHorizontal: 10,
    // height: '100%',
  },
});

const items = [
  {key: '1', name: 'Rafael'},
  {key: '2', name: 'Melo'},
]



export default class Main extends React.Component {
  _renderItem (item){
    return (
      <Text>{item.name}</Text>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ paddingHorizontal: 10 }} h3>Hospitais de Salvador</Text>
        <SearchBar
          containerStyle={styles.containerSearch}
          inputStyle={styles.inputSearch}
          lightTheme
          round
          showLoading
          // searchIcon={false} // You could have passed `null` too
          // onChangeText={someMethod}
          // onClear={someMethod}
          placeholder='Busque pelo nome'
        />
        <Text h4>Hospitais de Salvador</Text>

        <FlatList
          renderItem={ item => this._renderItem(item) }
          data={items}
        />
      </View>

    )
  }
}

