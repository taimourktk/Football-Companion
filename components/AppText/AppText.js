import React from "react";
import { Text, StyleSheet } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
});

export default AppText;
