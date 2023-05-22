import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

export const RegistrationScreen = () => {
  const [fontsLoaded] = useFonts({
    RobotoMedium: require("../assets/fonts/robotomedium.ttf"),
    RobotoRegular: require("../assets/fonts/robotoregular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/photobg.jpg")}
        imageStyle={styles.image}
      ></ImageBackground>
      <View style={styles.containerForm}>
        <View style={styles.registrationFormBox}>
          <View style={styles.photoBox}></View>
          <Text style={styles.registerTitle}>Registration</Text>
          <View style={styles.inputsContainer}>
            <TextInput style={styles.input} placeholder="Login"></TextInput>
            <TextInput style={styles.input} placeholder="Email"></TextInput>
            <TextInput
              style={styles.inputLast}
              placeholder="Password"
            ></TextInput>
          </View>
          <TouchableOpacity
            title="Sign up"
            style={{
              alignSelf: "center",
              backgroundColor: "#FF6C00",
              width: 344,
              height: 50,
              borderRadius: 100,
              padding: 16,
            }}
          >
            <Text style={styles.btnLabel}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",

    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",

    top: "0%",
    left: "0%",
    transform: "translate(-216px,-466px)",
    flex: 1,
    justifyContent: "center",
    width: 432,
    height: 932,
    resizeMode: "cover",
  },
  photoBox: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: "translate(152px,-60px)",

    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  registrationFormBox: {
    position: "absolute",
    transform: "translate(-216px,-60px)",

    width: 432,
    height: 548,
    borderRadius: "25px 25px 0 0",
    backgroundColor: "#FFFFFF",
    paddingTop: 92,
    paddingRight: 16,
    paddingBottom: 78,
    paddingLeft: 16,
  },
  containerForm: {
    position: "relative",
  },
  registerTitle: {
    fontFamily: "RobotoMedium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.3,
    textAlign: "center",
    marginBottom: 32,
  },
  input: {
    width: 343,
    height: 50,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
    marginBottom: 16,
    paddingLeft: 12,
    borderRadius: 8,
    fontFamily: "RobotoRegular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  inputLast: {
    width: 344,
    height: 50,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    alignSelf: "center",
    marginBottom: 0,
    paddingLeft: 12,
    borderRadius: 8,
    fontFamily: "RobotoRegular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  inputsContainer: {
    marginBottom: 44,
  },

  btnLabel: {
    alignSelf: "center",
    color: "#FFFFFF",
    fontFamily: "RobotoRegular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
});
