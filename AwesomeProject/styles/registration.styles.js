import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",

    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    position: "absolute",

    top: 0,
    left: 0,
    // transform: [{ translateX: -216 }, { translateY: -466 }],
    transform: [{ translateX: -216 }],

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
    transform: [{ translateX: 152 }, { translateY: -60 }],

    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  registrationFormBox: {
    flex: 1,
    position: "absolute",
    //
    transform: [{ translateX: -216 }, { translateY: -132 }],

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
    color: "#212121",
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
    color: "#212121",
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
  addPhotoImg: {
    position: "absolute",
    bottom: 15,
    right: -12,
    width: 25,
    height: 25,
  },
  passwordContainer: {
    position: "relative",
  },

  showPasswordContainer: {
    position: "absolute",
    top: 16,
    right: 40,
  },
  showPasswordText: {
    fontFamily: "RobotoRegular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  signUpBtn: {
    alignSelf: "center",
    backgroundColor: "#FF6C00",
    width: 344,
    height: 50,
    borderRadius: 100,
    padding: 16,
    marginBottom: 16,
  },
  textLogIn: {
    textAlign: "center",
    fontFamily: "RobotoRegular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
