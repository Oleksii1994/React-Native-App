import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { styles } from "../styles/posts.styles";

//Home

export const PostsScreen = () => {
  const [userLogin, setUserLogin] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [point, setPoint] = useState("");
  const navigation = useNavigation();
  // const {
  //   params: {
  //     name = "",
  //     userEmail = "",
  //     title = "",
  //     photo = "",
  //     location = "",
  //   },
  // } = useRoute();
  // const { params } = useRoute();

  const {
    params: {
      name = "",
      userEmail = "",
      postTitle = "",
      postPhoto = "",
      postPoint = "",
    },
  } = useRoute();

  useEffect(() => {
    setUserLogin(name);
    setEmail(userEmail);
    setTitle(postTitle);
    setPhoto(postPhoto);
    setPoint(postPoint);
  }, [title, photo, point]);

  // const handleLogin = () => {
  //   setUserLogin(name);
  //   return <Text>{userLogin}</Text>;
  // };

  // const handleEmail = () => {
  //   setEmail(userEmail);
  //   return <Text>{email}</Text>;
  // };

  return (
    <View style={styles.postsContainer}>
      <View style={styles.userContainer}>
        <View style={styles.photoBox}></View>
        <View style={styles.userInfoBox}>
          <Text>{userLogin}</Text>

          <Text>{email}</Text>
          {/* <Text>{title}</Text>
          <Text>{point}</Text> */}
        </View>
      </View>
      <View>
        <Text>{photo}</Text>
        <Text>{title}</Text>
        <Text>{point}</Text>
      </View>
    </View>
  );
};
{
  /* <View style={styles.footer}>
        <TouchableOpacity
          onPress={() =>
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
      </View> */
}
