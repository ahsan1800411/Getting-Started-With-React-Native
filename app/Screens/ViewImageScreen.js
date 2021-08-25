import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color='white' size='30' />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name='trash-can-outline'
          color='white'
          size='35'
        />
      </View>
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
        resizeMode='contain'
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
