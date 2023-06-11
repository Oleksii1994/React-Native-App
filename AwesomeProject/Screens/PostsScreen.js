import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { styles } from "../styles/posts.styles";
import { selectUser, selectPosts } from "../redux/selectors";

//Home

export const PostsScreen = () => {
  const navigation = useNavigation();

  const { name, email } = useSelector(selectUser);
  const posts = useSelector(selectPosts);

  return (
    <ScrollView style={styles.postsContainer}>
      <View style={styles.userContainer}>
        <View style={styles.photoBox}></View>
        <View style={styles.userInfoBox}>
          <Text>{name}</Text>

          <Text>{email}</Text>
        </View>
      </View>
      <View>
        {/* {postsToRender.map((item, index) => (
          <View key={index}>
            <Image
              source={{ uri: item.postPhoto }}
              style={{ width: 200, height: 200 }}
            />
            <Text>{item.postTitle}</Text>
            <Text>{item.postPoint}</Text>
          </View>
        ))} */}
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
