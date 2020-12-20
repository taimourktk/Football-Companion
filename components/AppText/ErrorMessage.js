import React from "react";
import { StyleSheet } from "react-native";
import AppText from "./AppText";
function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppText>{error}</AppText>;
}
const styles = StyleSheet.create({
  error: { color: "white" },
});
export default ErrorMessage;
