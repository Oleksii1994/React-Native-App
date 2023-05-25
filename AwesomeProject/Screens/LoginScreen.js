import {
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import { useNavigation, useRoute } from "@react-navigation/native";
import { styles } from "../styles/login.styles";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

export const LoginScreen = () => {
  const navigation = useNavigation();
  const [state, setState] = useState(initialState);
  const [isShowPassword, setIsShowPassword] = useState(true);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [fontsLoaded] = useFonts({
    RobotoMedium: require("../assets/fonts/robotomedium.ttf"),
    RobotoRegular: require("../assets/fonts/robotoregular.ttf"),
  });

  const onLogin = () => {
    if (!state.email || !state.password) {
      Alert.alert("All fields must be filled");
      return;
    }

    if (!state.email.includes("@")) {
      Alert.alert("Enter a valid email address (Example: xxxx@yyyy.zzz)");
      return;
    }

    if (state.password.length < 8) {
      Alert.alert("Your password must have at least 8 characters");
      return;
    }
    console.log(state);
    setState(initialState);
    navigation.navigate("Home", {
      userName: state.userName,
      email: state.email,
    });
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
            <View style={styles.loginFormBox}>
              <Text style={styles.LoginTitle}>Log In</Text>
              <View style={styles.inputsContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) =>
                    setState({ ...state, email: text.trim() })
                  }
                  value={state.email}
                  placeholder="Email"
                  keyboardType="email-address"
                ></TextInput>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.inputLast}
                    value={state.password}
                    onChangeText={(text) =>
                      setState({ ...state, password: text.trim() })
                    }
                    placeholder="Password (at least 8 characters)"
                    textContentType="password"
                    secureTextEntry={!isShowPassword}
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
              <TouchableOpacity onPress={onLogin} style={styles.logInBtn}>
                <Text style={styles.btnLabel}>Log In</Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity
                  style={styles.textLogInContainer}
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={styles.textQuestionRegister}>
                    Don't have an account?{" "}
                    <Text style={styles.textRegister}>Register</Text>
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
