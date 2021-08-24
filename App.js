// import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
  SafeAreaView,
} from "react-native";

export default function App() {
  // const handlePress = () => {};
  // console.log(Dimensions.get("screen"));

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "tomato",
        }}
      ></View>
      <View
        style={{
          flex: 1,
          backgroundColor: "gold",
        }}
      ></View>
      <View
        style={{
          flex: 1,
          backgroundColor: "tomato",
        }}
      ></View>
      <StatusBar style='auto' />
    </View>
  );
}

// const styleContainer = { backgroundColor: "gold" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
