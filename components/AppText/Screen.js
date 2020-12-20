import React, { Children } from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";
import colors from "../../config/colors";
function Screen({ children }) {
  return <SafeAreaView style={styles.Screen}>{children}</SafeAreaView>;
}
const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.primary,
    marginTop: Constants.statusBarHeight,
  },
});
export default Screen;
