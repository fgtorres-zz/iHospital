import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { ListItem, Card } from 'react-native-elements';

export default class ListHosp extends React.Component {
  render(){
    const { dados } = this.props;
    return(
      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={ item => item.CNES.toString() }
          data={dados}
          renderItem={({item}) => (
            <ListItem
              leftIcon={{ name:"local-hospital", color:'#c03b2b' }}
              title={item.nome}
              subtitle={item.address}
              onPress={()=>{this.props.navigation.navigate('Hospital', { hospital:item })}}
            />
          )}
          ListEmptyComponent={
            <Card title='Nada encontrado'>
              <Text style={{marginBottom: 10, textAlign: 'center'}}>
                Nenhum hospital foi encontrado, por favor tente com outro nome.
              </Text>
            </Card>
          }
        />
      </View>
    )
  }
}