import React from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import colors from "../config/colors";
import AppTextInput from "../components/AppText/AppTextInput";
import Screen from "../components/AppText/Screen";
import AppButton from "../components/AppText/AppButton";
import AppText from "../components/AppText/AppText";
import ErrorMessage from "../components/AppText/ErrorMessage";
const { width, height } = Dimensions.get("screen");

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});
function LoginScreen({ navigation }) {
  return (
    <Screen>
      <View>
        <Image
          style={styles.logo}
          source={require("../assets/loginLogo.png")}
        />
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.baseText}>LOG IN</Text>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <AppTextInput
                placeholder="Email"
                icon="email"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                keyboard="email-address"
                textContentType="emailAddress"
              />
              <ErrorMessage error={errors.email} visible={touched.email} />
              <AppTextInput
                placeholder="Password"
                icon="lock"
                autoCapitalize="none"
                secureTextEntry
                onChangeText={handleChange("password")}
                autoCorrect={false}
                textContentType="password"
              />
              <ErrorMessage error={errors.password} visible={touched.email} />
              <View style={styles.buttonLogin}>
                <AppButton title="login" onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </View>
      <View>
        <Text style={styles.signupText}>Don't have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signUpbutton}>Signup</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  loginContainer: {
    padding: 30,
    marginTop: height / 4.5,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 10,
    position: "absolute",
  },
  buttonLogin: {
    width: width / 1.5,
  },
  baseText: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  signupText: {
    fontSize: 25,
    fontWeight: "600",
    color: colors.white,
    alignSelf: "center",
  },
  signUpbutton: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.textPrimary,
    alignSelf: "center",
    borderBottomWidth: 3,
    borderBottomColor: colors.light,
  },
});
export default LoginScreen;
