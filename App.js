import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
