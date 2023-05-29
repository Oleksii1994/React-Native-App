import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    paddingTop: 32,
    backgroundColor: "#FFFFFF",

    // justifyContent: "center",
    // alignItems: "center",
  },
  photoContainer: {
    // flex: 1,
    width: 367,
    height: 267,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 64,

    // alignItems: "center",
    // justifyContent: "center",
  },
  photoThumb: {
    width: 367,
    height: 267,
    backgroundColor: "#E8E8E8",
    marginLeft: "auto",
    marginBottom: 8,
    borderRadius: 8,
    // flex: 1,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  photoIcon: {
    width: 60,
    height: 60,
  },

  downloadText: {
    fontFamily: "RobotoRegular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  inputsContainer: {
    width: 367,
    // height: 267,
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    paddingLeft: 12,
    width: 343,
    height: 50,
    alignContent: "center",
    fontFamily: "RobotoRegular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    marginBottom: 16,
  },

  inputLocation: {
    position: "relative",
    paddingLeft: 36,
    width: 343,
    height: 50,
    alignContent: "center",
    fontFamily: "RobotoRegular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    marginBottom: 32,
  },

  locationIcon: {
    width: 24,
    height: 24,
    position: "absolute",
    transform: [{ translateX: 8 }, { translateY: 78 }],
  },

  button: {
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    width: 344,
    height: 50,
    borderRadius: 100,
    padding: 16,
    marginBottom: 16,
  },

  btnLabel: {
    alignSelf: "center",
    color: "#BDBDBD",
    fontFamily: "RobotoRegular",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },

  buttonTrash: {
    positon: "absolute",
    bottom: -96,
    alignSelf: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    width: 70,
    height: 40,
    borderRadius: 100,
    padding: 16,
    marginBottom: 16,
  },

  btnTrashIcon: {
    width: 24,
    height: 24,
    alignSelf: "center",
  },

  camera: {
    flex: 1,
    width: 367,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  photoView: {
    position: "absolute",
    width: 367,
    height: 267,

    borderColor: "#ffffff",
    borderWidth: 1,
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },

  buttonCamera: { alignSelf: "center" },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },

  containerMap: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    position: "absolute",
    zIndex: 2,
    width: 367,
    height: 267,
  },
});
