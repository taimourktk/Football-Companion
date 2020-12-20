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
import ErrorMessage from "../components/AppText/ErrorMessage";
const { width, height } = Dimensions.get("screen");
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
  phoneNumber: Yup.string()
    .required()
    .matches(phoneRegExp, "Phone number is not valid")
    .label("Phone No"),
});
function RegisterScreen({ navigation }) {
  return (
    <Screen>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.baseText}>
            Football <Text style={styles.innerText}> Companion</Text>
          </Text>
          <Text style={styles.slug}>
            P {" A "} K {" I "} S {" T "} A {" N"}
          </Text>
        </View>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.baseText}>SIGN UP</Text>
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
                placeholder="Full Name"
                icon="account-circle"
                autoCorrect={false}
                onChangeText={handleChange("name")}
                onBlur={() => setFieldTouched("name")}
                keyboard="email-address"
              />
              <ErrorMessage error={errors.name} visible={touched.name} />
              <AppTextInput
                placeholder="Phone No"
                icon="cellphone"
                autoCorrect={false}
                onChangeText={handleChange("phoneNumber")}
                onBlur={() => setFieldTouched("phoneNumber")}
                keyboard="numeric"
              />
              <ErrorMessage
                error={errors.phoneNumber}
                visible={touched.phoneNumber}
              />
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
              <ErrorMessage
                error={errors.password}
                visible={touched.password}
              />
              <View style={styles.buttonLogin}>
                <AppButton title="Sign up" onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </View>

      <Text style={styles.signupText}>Already have a account?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.signUpbutton}>Login</Text>
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/loginLogo.png")}
        />
      </View>
    </Screen>
  );
}
const styles = StyleSheet.create({
  baseText: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  buttonLogin: {
    width: width / 1.5,
    height: "10%",
  },
  signupContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  signupText: {
    fontSize: 20,
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

  slug: {
    fontSize: 25,
    color: colors.textSecondary,
    textAlign: "center",
  },
  textContainer: {
    top: 20,
    marginBottom: 30,
  },
  innerText: {
    fontSize: 30,
    fontWeight: "500",
  },
});
export default RegisterScreen;
