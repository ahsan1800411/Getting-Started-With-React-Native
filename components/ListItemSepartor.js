import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../app/config/colors";

export default function ListItemSepartor() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    color: colors.light,
  },
});
