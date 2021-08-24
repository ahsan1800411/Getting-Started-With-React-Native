import { StatusBar } from "expo-status-bar";
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
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Hello");
  };
  return (
    <View style={styles.container}>
      <Button title='Click Me' onPress={handlePress} color='red' />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
