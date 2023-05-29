import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  Alert,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState, useEffect, useRef } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useFonts } from "expo-font";
import { styles } from "../styles/createPost.styles";
import { PROVIDER_GOOGLE } from "react-native-maps";

// const apiKey = "pk.ac7a441bd462fa3aa0b8d5b701b6e8b1";
const apiKey = "AIzaSyD3Lu8Msh9lq1krTFrdoCayClRARhwafIo";
// let locationsOfInterest = [
//   {
//     title: "First",
//     location: {
//       latitude: 50.39294500191538,
//       longitude: 30.606561675667763,
//     },
//     description: "My First Marker",
//   },
//   {
//     title: "Second",
//     location: {
//       latitude: 50.23,
//       longitude: 30.54,
//     },
//     description: "My Second Marker",
//   },
// ];

export const CreatePostsScreen = () => {
  const navigation = useNavigation();
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [showMap, setShowMap] = useState("false");
  const [point, setPoint] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("null");
  // const [draggableMarkerCoord, setDraggableMarkerCoord] = useState({
  //   latitude: 50.39294500191538,
  //   longitude: 30.606561675667763,
  //   // latitudeDelta: 0.007304944122623169,
  //   // longitudeDelta: 0.01574993133545277,
  // });
  // const [hasPermission, setHasPermission] = useState(null);
  // const cameraRef = useRef(null);

  // const [fontsLoaded] = useFonts({
  //   RobotoMedium: require("../assets/fonts/robotomedium.ttf"),
  //   RobotoRegular: require("../assets/fonts/robotoregular.ttf"),
  // });

  // const showLocationsOfInterest = () => {
  //   return locationsOfInterest.map((item, index) => (
  //     <Marker
  //       key={index}
  //       title={item.title}
  //       description={item.description}
  //       coordinate={item.location}
  //     />
  //   ));
  // };
  const onRegionChange = (region) => {
    console.log(region);
  };

  const onShowMap = () => {
    setShowMap(true);
  };

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    console.log(photo.uri);
    setPhoto(photo.uri);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();

    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      console.log(coords);
      setLocation(coords);
    })();
    setShowMap(false);
    setPhoto("");
    setPoint("");
    setTitle("");
    setLocation(null);
    setCamera(null);
  }, []);

  // const handleCameraRef = (ref) => {
  //   setCameraRef(ref);

  // };

  if (hasPermission === null) {
    return <Text>Please give an access to camera</Text>;
  }

  if (hasPermission === false) {
    return <Text>You denied access to camera</Text>;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setShowMap(false);
      }}
    >
      <View style={styles.container}>
        <View style={styles.photoContainer}>
          <View style={styles.photoThumb}>
            <Camera style={styles.camera} ref={setCamera} type={type}>
              {photo && (
                <View style={styles.photoView}>
                  <Image
                    source={{ uri: photo }}
                    style={{ width: 367, height: 267, overflow: "hidden" }}
                  />
                </View>
              )}
              <TouchableOpacity onPress={takePhoto}>
                <Image
                  style={styles.photoIcon}
                  source={require("../assets/images/group.png")}
                ></Image>
              </TouchableOpacity>
            </Camera>
          </View>

          <Text style={styles.downloadText}>Download photo</Text>
        </View>
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            name="title"
            onChangeText={(text) => setTitle(text)}
            placeholder="title..."
          ></TextInput>
          <TextInput
            style={styles.inputLocation}
            name="location"
            onChangeText={(text) => setPoint(text)}
            placeholder={"location..."}
          ></TextInput>
          <Image
            source={require("../assets/images/map-pin.png")}
            style={styles.locationIcon}
          ></Image>

          <TouchableOpacity style={styles.button} onPress={onShowMap}>
            <Text style={styles.btnLabel}>Choose geolocation</Text>
          </TouchableOpacity>
          <Text>{photo}</Text>
          <Text>{title}</Text>
          <Text>{point}</Text>

          {showMap && (
            <TouchableOpacity onPress={() => setShowMap(false)}>
              <View style={styles.containerMap}>
                <MapView
                  style={styles.mapStyle}
                  provider={PROVIDER_GOOGLE}
                  initialRegion={{
                    latitude: 50.39294500191538,
                    longitude: 30.606561675667763,
                    latitudeDelta: 0.007304944122623169,
                    longitudeDelta: 0.01574993133545277,
                  }}
                  region={{
                    ...location,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  showsUserLocation={true}
                  mapType="standard"
                  minZoomLevel={15}
                  onMapReady={() => {
                    Alert.alert(
                      "Tap anywhere over the borders of map to close it"
                    );
                    setPoint("Kiev, Ukraine");
                  }}
                  onRegionChange={onRegionChange}
                >
                  {/* {showLocationsOfInterest()} */}
                  <Marker
                    draggable
                    title={"I am here"}
                    coordinate={location}
                    description="Hello"
                  />
                </MapView>
              </View>
            </TouchableOpacity>
          )}

          {!showMap && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Home", {
                  screen: "Posts",
                  params: {
                    postTitle: title,
                    postPhoto: photo,
                    postPoint: point,
                  },
                })
              }
              style={
                photo || photo & title || photo & location
                  ? styles.button
                  : {
                      alignSelf: "center",
                      alignContent: "center",
                      justifyContent: "center",
                      backgroundColor: "#F6F6F6",
                      width: 344,
                      height: 50,
                      borderRadius: 100,
                      padding: 16,
                      marginBottom: 16,
                    }
              }
            >
              <Text
                style={
                  photo || photo & title || photo & location
                    ? styles.btnLabel
                    : {
                        alignSelf: "center",
                        color: "#BDBDBD",
                        fontFamily: "RobotoRegular",
                        fontWeight: 400,
                        fontSize: 16,
                        lineHeight: 19,
                      }
                }
              >
                Post
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={styles.buttonTrash}
          onPress={() => {
            setPhoto("");
            setPoint("");
            setTitle("");
            setLocation(null);
          }}
        >
          <Image
            style={styles.btnTrashIcon}
            source={require("../assets/images/trash-2.png")}
          ></Image>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};
