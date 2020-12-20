import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppText/AppButton";
const { height, width } = Dimensions.get("screen");
function WelcomeScreen({ navigation }) {
  console.log(width);
  console.log(height);
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo.png")}
        resizeMode="stretch"
      />
      <View style={styles.textContainer}>
        <Text style={styles.baseText}>
          Football <Text style={styles.innerText}> Companion</Text>
        </Text>
        <Text style={styles.slug}>
          P {" A "} K {" I "} S {" T "} A {" N"}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Sign up"
          color="secondary"
          titleColor="primary"
          onPress={() => navigation.navigate("SignUp")}
        />
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  baseText: { fontSize: 35, fontWeight: "bold", color: colors.textPrimary },
  buttonsContainer: { padding: 20, width: "100%" },
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  innerText: {
    fontSize: 30,
    fontWeight: "500",
  },
  logo: {
    width: width / 2.5,
    height: height / 3.4,
    position: "absolute",
    top: 80,
  },
  slug: {
    fontSize: 25,
    color: colors.textSecondary,
    textAlign: "center",
  },
  textContainer: {
    position: "absolute",
    top: height / 2.35,
  },
});
export default WelcomeScreen;
