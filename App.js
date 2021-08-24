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
} from "react-native";

export default function App() {
  const handlePress = () => {};
  return (
    <View style={[styles.container]}>
      <Button
        title='Click Me'
        onPress={() =>
          Alert.prompt("My title", "My Message", (text) => console.log(text))
        }
      />
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
