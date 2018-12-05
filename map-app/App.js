import React from "react";
import { View, AsyncStorage } from "react-native";
import { Header } from "react-native-elements";
import Routes from "./src/Routes";
import Onboarding from "./src/screens/Onboarding";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const hasValue = this._retrieveData();
    this.state = {
      showOnboarding: hasValue === "false" ? "false" : "true"
    };
    AsyncStorage.setItem("showOnboarding", "true");
  }
  _storeData = async () => {
    try {
      await AsyncStorage.setItem("showOnboarding", "false");
      this.setState({ showOnboarding: "false" });
    } catch (error) {
      console.error(error);
    }
  };
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("showOnboarding");
      return value !== null && value;
    } catch (error) {
      console.error(error);
    }
  };
  render() {
    const { showOnboarding } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {showOnboarding === "true" ? (
          <Onboarding onDone={this._storeData} />
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
