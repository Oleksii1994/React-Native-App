import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
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

  const {
    params: {
      name = "",
      userEmail = "",
      postTitle = "",
      postPhoto = "",
      postPoint = "",
    },
  } = useRoute();

  // useEffect(() => {
  //   setUserLogin(name);
  //   setEmail(userEmail);
  //   setTitle(postTitle);
  //   setPhoto(postPhoto);
  //   setPoint(postPoint);

  //   if (title !== "" && photo !== "" && point !== "") {
  //     const postObject = {
  //       postTitle: title,
  //       postPhoto: photo,
  //       postPoint: point,
  //     };
  //     setPostsArr((prevState) => {
  //       if (!prevState.includes(postObject)) {
  //         return [...prevState, postObject];
  //       }
  //     });
  //     console.log(postsArr);
  //   }
  // }, [title, photo, point]);

  // useEffect(() => {
  //   setPostsToRender(() => [...postsArr]);
  // }, [postsArr]);

  // useEffect(() => {
  //   setUserLogin(name);
  //   setEmail(userEmail);
  //   setTitle(postTitle);
  //   setPhoto(postPhoto);
  //   setPoint(postPoint);

  //   if (title !== "" && photo !== "" && point !== "") {
  //     const postObject = {
  //       postTitle: title,
  //       postPhoto: photo,
  //       postPoint: point,
  //     };
  //     setPostsArr((prevState) => {
  //       if (!prevState.some((post) => post.postTitle === title)) {
  //         return [...prevState, postObject];
  //       }
  //       return prevState;
  //     });
  //     console.log(postsArr);
  //   }
  // }, [title, photo, point]);

  // useEffect(() => {
  //   setPostsToRender(() => [...postsArr]);
  // }, [postsArr]);

  // useEffect(() => {
  //   // В этом useEffect мы не указываем зависимости, чтобы он срабатывал при каждом изменении postsToRender
  //   console.log(postsToRender);
  // }, [postsToRender]);

  useEffect(() => {
    setUserLogin(name);
    setEmail(userEmail);
  }, [userLogin, email]);

  useEffect(() => {
    setTitle(postTitle);
    setPhoto(postPhoto);
    setPoint(postPoint);
  }, [postTitle, postPhoto, postPoint]);

  useEffect(() => {
    if (title !== "" && photo !== "" && point !== "") {
      const postObject = {
        postTitle: title,
        postPhoto: photo,
        postPoint: point,
      };
      setPostsArr((prevState) => {
        if (!prevState.some((post) => post.postTitle === title)) {
          return [...prevState, postObject];
        }
        return prevState;
      });
      console.log(postsArr);
    }
  }, [title, photo, point]);

  useEffect(() => {
    setPostsToRender(postsArr);
  }, [postsArr]);

  useEffect(() => {
    console.log(postsToRender);
  }, [postsToRender]);

  return (
    <ScrollView style={styles.postsContainer}>
      <View style={styles.userContainer}>
        <View style={styles.photoBox}></View>
        <View style={styles.userInfoBox}>
          <Text>{userLogin}</Text>

          <Text>{email}</Text>
        </View>
      </View>
      <View>
        {postsToRender.map((item, index) => (
          <View key={index}>
            <Image
              source={{ uri: item.postPhoto }}
              style={{ width: 200, height: 200 }}
            />
            <Text>{item.postTitle}</Text>
            <Text>{item.postPoint}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
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
