import React from "react";
import { Image, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../../components/AppButton";
import AppFormField from "../../components/forms/AppFormField";
import Screen from "./../../components/Screen";
import SubmitButton from "../../components/SubmitButton";
import AppForm from "../../components/forms/AppForm";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          icon='email'
          name='email'
          autoCaptitalize='none'
          autoCorrect={false}
          placeholder='Email'
          keyboardType='email-address'
          textContentType='emailAddress'
        />

        <AppFormField
          icon='lock'
          autoCaptitalize='none'
          autoCorrect={false}
          placeholder='Password'
          secureTextEntry
          textContentType='password'
          name='password'
        />

        <SubmitButton title='Login' />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
