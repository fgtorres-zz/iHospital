import React from "react";
import { View, StyleSheet, Dimensions, AsyncStorage } from "react-native";
import { SearchBar, Icon } from "react-native-elements";
import ListHosp from "../components/ListHosp";
import dadosJson from "../dados";

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  containerSearch: {
    backgroundColor: "#ffffff",
    borderTopColor: "transparent",
    marginBottom: 0
  },
  inputSearch: {
    backgroundColor: "#eee",
    marginHorizontal: 10,
    marginBottom: 12
  }
});

export default class Main extends React.Component {
  static navigationOptions = {
    title: "Hospitais",
    tabBarIcon: ({ tintColor }) => (
      <Icon name="view-headline" color={tintColor} />
    )
  };
  constructor(props) {
    super(props);
    this.state = {
      dados: dadosJson.two,
      dadosFind: []
    };
  }
  componentDidMount() {
    const { dados } = this.state;
    this.setState({ dadosFind: dados });
  }
  _formatSearch = text => {
    text = text.toLowerCase();
    text = text.replace(new RegExp("[ÁÀÂÃ]", "gi"), "a");
    text = text.replace(new RegExp("[ÉÈÊ]", "gi"), "e");
    text = text.replace(new RegExp("[ÍÌÎ]", "gi"), "i");
    text = text.replace(new RegExp("[ÓÒÔÕ]", "gi"), "o");
    text = text.replace(new RegExp("[ÚÙÛ]", "gi"), "u");
    text = text.replace(new RegExp("[Ç]", "gi"), "c");
    return text;
  };
  _searchMethod = search => {
    const { dados } = this.state;
    if (search) {
      search = this._formatSearch(search);
      const findThis = new RegExp(search, "i");
      const newSearch = dados.filter(item => item.nome.search(findThis) > -1);
      this.setState({ dadosFind: newSearch });
    } else {
      this.setState({ dadosFind: dados });
    }
  };
  render() {
    const { dadosFind } = this.state;
    const { navigation } = this.props;
    return (
      <View style={{ height: height - 55, flex: 1 }}>
        <SearchBar
          containerStyle={styles.containerSearch}
          inputStyle={styles.inputSearch}
          lightTheme
          round
          showLoading
          onChangeText={this._searchMethod}
          placeholder="Busque pelo nome"
        />
        <ListHosp dados={dadosFind} navigation={navigation} />
      </View>
    );
  }
}
