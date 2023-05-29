import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { styles } from "../styles/posts.styles";

//Home

export const PostsScreen = () => {
  const [postsArr, setPostsArr] = useState([]);
  const [postsToRender, setPostsToRender] = useState(postsArr);
  const [userLogin, setUserLogin] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState("");
  const [point, setPoint] = useState("");
  const navigation = useNavigation();

  // const transformData = () => {
  //   const dataObj = { postTitle: title, postPhoto: photo, postPoint: point };
  //   setPostsArr((prevState) => [...prevState, ...dataObj]);
  // };

  const {
    params: {
      name = "",
      userEmail = "",
      postTitle = "",
      postPhoto = "",
      postPoint = "",
    },
  } = useRoute();

  // const renderPosts = () => {
  //   return postsArr.map((item, index) => {
  //     return (
  //       <View key={index}>
  //         <Image sourse={{ uri: item.postPhoto }} />
  //         <Text>{item.postTitle}</Text>
  //         <Text>{item.postPoint}</Text>
  //       </View>
  //     );
  //   });
  // };

  useEffect(() => {
    setUserLogin(name);
    setEmail(userEmail);
    setTitle(postTitle);
    setPhoto(postPhoto);
    setPoint(postPoint);

    if (title !== "" && photo !== "" && point !== "") {
      const postObject = {
        postTitle: title,
        postPhoto: photo,
        postPoint: point,
      };
      setPostsArr((prevState) => [...prevState, postObject]);
      console.log(postsArr);
    }
  }, [title, photo, point]);

  useEffect(() => {
    setPostsToRender(postsArr);
  }, [postsArr]);

  return (
    <View style={styles.postsContainer}>
      <View style={styles.userContainer}>
        <View style={styles.photoBox}></View>
        <View style={styles.userInfoBox}>
          <Text>{userLogin}</Text>

          <Text>{email}</Text>
        </View>
      </View>
      <View>
        {
          postsToRender.map((item, index) => (
            <View key={index}>
              <Image
                sourse={{ uri: item.postPhoto }}
                style={{ width: 200, height: 200 }}
              />
              <Text>{item.postTitle}</Text>
              <Text>{item.postPoint}</Text>
            </View>
          ))
          //   <Text>{photo}</Text>
          // <Text>{title}</Text>
          // <Text>{point}</Text>
        }
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
