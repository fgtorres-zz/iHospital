import React from "react";
import Expo from "expo";
import { View, Text, AsyncStorage } from "react-native";
import { Header } from "react-native-elements";
import Routes from "./src/Routes";
import Onboarding from "./src/screens/Onboarding";

export default class App extends React.Component {
  state = {
    storedValue: null
  };

  async componentDidMount() {
    let storedValue = await AsyncStorage.getItem("@MySuperStore:key");
    if (storedValue !== "skip") {
      storedValue = await AsyncStorage.setItem("@MySuperStore:key", "skip");
    }
    this.setState({
      storedValue
    });
  }

  setValue = () => this.setState({ storedValue: "skip" });

  render() {
    const { storedValue } = this.state;
    console.log("storedValue", storedValue);
    return (
      <View style={{ flex: 1 }}>
        {storedValue === null ? (
          <Onboarding onDone={this.setValue} />
        ) : (
          <View>
            <Header
              backgroundColor="#337ab7"
              centerComponent={{
                text: "iHospital",
                style: { color: "#ffffff", fontSize: 18 }
              }}
            />
          </View>
        )}
        <Routes />
      </View>
    );
  }
}
