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
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Hello");
  };
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo tenetur et
        molestias saepe voluptatibus assumenda sapiente, dicta libero optio
        exercitationem.
      </Text>
      <TouchableNativeFeedback onPress={handlePress}>
        <Image
          source={{
            width: 200,
            height: 200,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableNativeFeedback>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
