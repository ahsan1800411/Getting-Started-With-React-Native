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
    <SafeAreaView style={[styles.container]}>
      <View
        style={{
          width: "50%",
          height: 70,
          backgroundColor: "tomato",
        }}
      ></View>
      <StatusBar style='auto' />
    </SafeAreaView>
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
