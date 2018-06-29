import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, SearchBar } from 'react-native-elements';
import ListHosp from '../components/ListHosp';
import dadosJson from '../dados';

const styles = StyleSheet.create({
  containerSearch: {
    backgroundColor: 'transparent',
    borderTopColor: 'transparent',
    marginBottom: 0,
  },
  inputSearch: {
    backgroundColor: '#eee',
    marginHorizontal: 10,
    marginBottom: 12,
  },
});

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dados: dadosJson.two};
  }
  render() {
    const { dados } = this.state
    return (
      <View>
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
        <ListHosp />
      </View>

    )
  }
}

