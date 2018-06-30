import React from 'react';
import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import { ListItem } from 'react-native-elements';
import dadosJson from '../dados';

export default class ListHosp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dados: dadosJson.two};
  }
  render(){
    const { dados } = this.state;
    const { height } = Dimensions.get('window');
    return(
      <View style={{ flex:1 }}>
        <FlatList
          keyExtractor={item => item.CNES.toString()}
          data={dados}
          renderItem={({item}) => <ListItem leftIcon={{name:"local-hospital"}} title={item.nome} subtitle={item.address}/>}
        />
      </View>

    )
  }
}