import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { styles } from "../styles/posts.styles";

//Home

export const PostsScreen = () => {
  const navigation = useNavigation();
  // const {
  //   params: { userName, email },
  // } = useRoute();

  return (
    <View style={styles.postsContainer}>
      <View style={styles.userContainer}>
        <View style={styles.photoBox}></View>
        <View style={styles.userInfoBox}>
          <Text>Name</Text>
          <Text>Email</Text>
        </View>
      </View>
      {/* <View style={styles.footer}>
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
      </View> */}
    </View>
  );
};
