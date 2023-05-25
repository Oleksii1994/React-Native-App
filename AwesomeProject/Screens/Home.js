import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
// import React, { useState } from "react";

import { styles } from "../styles/posts.styles";
// const initialState = {
//   name: "",
//   userEmail: "",
// };

export const Home = () => {
  const navigation = useNavigation();
  // const [state, setState] = useState(initialState);
  const {
    params: { userName, email },
  } = useRoute();

  // setState((prevState)=>{ ...prevState, name: userName, userEmail: email });
  return (
    <View style={styles.postsContainer}>
      {/* <TouchableOpacity
        style={styles.logoutBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Image
          source={require("../assets/images/logout.png")}
          style={{ width: 24, height: 24 }}
        ></Image>
      </TouchableOpacity> */}
      <View style={styles.userContainer}>
        <View style={styles.photoBox}></View>
        <View style={styles.userInfoBox}>
          <Text>{userName}</Text>
          <Text>{email}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() =>
            // navigation.navigate("Posts", {
            //   userName,
            //   email,
            // })
            navigation.navigate("Posts", {
              screen: "Login",
              params: { userName, email },
            })
          }
        >
          <Image
            source={require("../assets/images/grid.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => navigation.navigate("CreatePostsScreen")}
        >
          <View style={styles.addBox}>
            <Image source={require("../assets/images/union.png")} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Image
            source={require("../assets/images/user.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
