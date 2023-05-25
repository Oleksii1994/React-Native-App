import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  postsContainer: {
    backgroundColor: "#FFFFFF",
    height: "100%",

    paddingLeft: 16,
    paddingRight: 16,
  },
  userContainer: {
    flexDirection: "row",
    height: 60,
    gap: 8,
    marginTop: 32,
  },
  photoBox: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  userInfoBox: { alignSelf: "center" },
  footer: {
    position: "absolute",
    bottom: 0,
    transform: [{ translateX: 16 }],
    paddingBottom: 34,
    width: "100%",
    heignt: 83,
    flex: 1,
    flexDirection: "row",
    alignContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 32,
  },
  addBtn: {
    // flexDirection: "row",
    // alignContent: "space-evenly",
    // alignContent: "center",
    width: 70,
    height: 40,
    // backgroundColor: "#FF6C00",
    // borderRadius: 100,
  },
  addBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
});
