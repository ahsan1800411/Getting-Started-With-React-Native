// import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import ViewImageScreen from "./app/Screens/ViewImageScreen";
import WelcomeScreen from "./app/Screens/WelcomeScreen";
import AppButton from "./components/AppButton";

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AppButton title='Login' onPress={() => console.log("Tapped")} />
    </View>
    // <WelcomeScreen />
    // <ViewImageScreen />
  );
}
