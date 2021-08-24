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
  Alert,
} from "react-native";

export default function App() {
  const handlePress = () => {};
  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
