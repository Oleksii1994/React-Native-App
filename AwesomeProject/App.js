import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { CreatePostsScreen } from "./Screens/CreatePostsScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { ProfileScreen } from "./Screens/ProfileScreen";
import { Home } from "./Screens/Home";
import { useFonts } from "expo-font";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoMedium: require("./assets/fonts/robotomedium.ttf"),
    RobotoRegular: require("./assets/fonts/robotoregular.ttf"),
  });

  if (!fontsLoaded) {
    // Возвращайте экран загрузки или null, пока шрифты не загружены
    return null;
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={RegistrationScreen} />

        <MainStack.Screen name="Login" component={LoginScreen} />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerShown: false,
            // Обновленная часть
            // headerRight: () => (
            //   <TouchableOpacity
            //     style={styles.logoutBtn}
            //     onPress={() =>
            //       navigation.navigate("Login", { screen: "Login" })
            //     }
            //   >
            //     <Image
            //       source={require("./assets/images/logout.png")}
            //       style={{ width: 24, height: 24, marginRight: 10 }}
            //     ></Image>
            //   </TouchableOpacity>
            // ),
          })}
        />
        {/* <MainStack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerShown: false,
            headerRight: () => (
              <TouchableOpacity
                style={styles.logoutBtn}
                onPress={() =>
                  navigation.navigate("Login", { screen: "Login" })
                }
              >
                <Image
                  source={require("./assets/images/logout.png")}
                  style={{ width: 24, height: 24, marginRight: 10 }}
                ></Image>
              </TouchableOpacity>
            ),
          })}
        /> */}
        {/* <MainStack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
        />
        <MainStack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
