import {
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { styles } from "../styles/registration.styles";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

export const RegistrationScreen = () => {
  const [state, setState] = useState(initialState);
  const [isShowPassword, setIsShowPassword] = useState(true);

  const [fontsLoaded] = useFonts({
    RobotoMedium: require("../assets/fonts/robotomedium.ttf"),
    RobotoRegular: require("../assets/fonts/robotoregular.ttf"),
  });

  const onRegister = () => {
    console.log(state);
    setState(initialState);
  };

  const handlePasswordVisibility = () => {
    setIsShowPassword(!isShowPassword);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/photobg.jpg")}
          imageStyle={styles.image}
        ></ImageBackground>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.containerForm}>
            <View style={styles.registrationFormBox}>
              <View style={styles.photoBox}>
                <Image
                  source={require("../assets/images/add.png")}
                  style={styles.addPhotoImg}
                ></Image>
              </View>
              <Text style={styles.registerTitle}>Registration</Text>
              <View style={styles.inputsContainer}>
                <TextInput
                  style={styles.input}
                  value={state.userName}
                  onChangeText={(text) =>
                    setState({ ...state, userName: text })
                  }
                  placeholder="Login"
                ></TextInput>
                <TextInput
                  style={styles.input}
                  value={state.email}
                  onChangeText={(text) => setState({ ...state, email: text })}
                  placeholder="Email"
                ></TextInput>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.inputLast}
                    secureTextEntry={!isShowPassword}
                    onChangeText={(text) =>
                      setState({ ...state, password: text })
                    }
                    value={state.password}
                    placeholder="Password"
                  ></TextInput>
                  <TouchableOpacity
                    style={styles.showPasswordContainer}
                    onPress={handlePasswordVisibility}
                  >
                    <Text style={styles.showPasswordText}>
                      {!isShowPassword ? "Show" : "Hide"}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity onPress={onRegister} style={styles.signUpBtn}>
                <Text style={styles.btnLabel}>Sign Up</Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity style={styles.textLogInContainer}>
                  <Text style={styles.textLogIn}>
                    Already have account? Log In
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};
