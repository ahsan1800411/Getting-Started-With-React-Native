import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.loginContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text>Sell What You don't need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    height: 70,
    width: "100%",
    backgroundColor: "#fc5c65",
  },
  logo: {
    height: 100,
    width: 100,
    position: "absolute",
    top: 70,
  },
  loginContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    height: 70,
    width: "100%",
    backgroundColor: "#4ecdc4",
  },
});
