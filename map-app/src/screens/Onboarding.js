import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import hospital from "./hospital.png";
import vehicles from "./vehicles.png";
import icon from "./icon.png";

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height
  }
});

const OnboardingScreen = props => {
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={() => props.onDone(false)}
        skipToPage={2}
        nextLabel="Próximo"
        skipLabel="Pular"
        bottomBarHighlight={false}
        pages={[
          {
            backgroundColor: "#fff",
            image: <Image style={{ width: 150, height: 150 }} source={icon} />,
            title: "iHospital",
            subtitle: "iHospital é o seu aplicativo para encontrar hospitais"
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image style={{ width: 150, height: 150 }} source={hospital} />
            ),
            title: "Busca Simples",
            subtitle: "Basta buscar pelo nome e clicar no hospital desejado"
          },
          {
            backgroundColor: "#fff",
            image: (
              <Image style={{ width: 150, height: 150 }} source={vehicles} />
            ),
            title: "Ficou mais fácil",
            subtitle:
              "O endereço vai aparecer na tela e você pode ir com tranquilidade sabendo onde fica localizado"
          }
        ]}
      />
    </View>
  );
};

export default OnboardingScreen;
