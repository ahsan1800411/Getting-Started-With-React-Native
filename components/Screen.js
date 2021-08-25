import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
} from "react-native";

export default function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
