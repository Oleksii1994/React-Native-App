import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useFonts } from "expo-font";
import { styles } from "../styles/createPost.styles";
import { PROVIDER_GOOGLE } from "react-native-maps";

// const apiKey = "pk.ac7a441bd462fa3aa0b8d5b701b6e8b1";
const apiKey = "AIzaSyD3Lu8Msh9lq1krTFrdoCayClRARhwafIo";

export const CreatePostsScreen = () => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [showMap, setShowMap] = useState("false");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("null");
  // const [hasPermission, setHasPermission] = useState(null);
  // const cameraRef = useRef(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);
  // const [fontsLoaded] = useFonts({
  //   RobotoMedium: require("../assets/fonts/robotomedium.ttf"),
  //   RobotoRegular: require("../assets/fonts/robotoregular.ttf"),
  // });

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
    setShowMap(false);
  }, []);

  // const handleCameraRef = (ref) => {
  //   setCameraRef(ref);

  // };

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Camera.requestCameraPermissionsAsync();
  //     await MediaLibrary.requestPermissionsAsync();

  //     setHasPermission(status === "granted");
  //   })();
  // }, []);
  if (hasPermission === null) {
    return <Text>Please give an access to camera</Text>;
  }

  if (hasPermission === false) {
    return <Text>You denied access to camera</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
            placeholder="title..."
          ></TextInput>
          <TextInput
            style={styles.inputLocation}
            name="location"
            placeholder="location..."
          ></TextInput>
          <Image
            source={require("../assets/images/map-pin.png")}
            style={styles.locationIcon}
          ></Image>

          <TouchableOpacity style={styles.button} onPress={onShowMap}>
            <Text style={styles.btnLabel}>Choose geolocation</Text>
          </TouchableOpacity>

          {showMap && (
            <TouchableOpacity onPress={() => setShowMap(false)}>
              <View style={styles.containerMap}>
                <MapView
                  style={styles.mapStyle}
                  provider={PROVIDER_GOOGLE}
                  region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
                  mapType="standard"
                  minZoomLevel={15}
                  onMapReady={() => console.log("Map is ready")}
                  onRegionChange={() => console.log("Region change")}
                >
                  <Marker
                    title="I am here"
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    description="Hello"
                  />
                </MapView>
              </View>
            </TouchableOpacity>
          )}

          {!showMap && (
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnLabel}>Post</Text>
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity
          style={styles.buttonTrash}
          onPress={() => {
            setPhoto("");
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

// <Camera style={styles.camera} type={type} ref={setCameraRef}>
//   <View style={styles.photoView}>
//     <TouchableOpacity
//       style={styles.flipContainer}
//       onPress={() => {
//         setType(
//           type === Camera.Constants.Type.back
//             ? Camera.Constants.Type.front
//             : Camera.Constants.Type.back
//         );
//       }}
//     >
//       <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
//         {" "}
//         Flip{" "}
//       </Text>
//     </TouchableOpacity>
//     <TouchableOpacity
//       style={styles.buttonCamera}
//       onPress={async () => {
//         if (cameraRef) {
//           const { uri } = await cameraRef.takePictureAsync();
//           await MediaLibrary.createAssetAsync(uri);
//         }
//       }}
//     >
//       <View style={styles.takePhotoOut}>
//         <View style={styles.takePhotoInner}></View>
//       </View>
//     </TouchableOpacity>
//   </View>
// </Camera>

{
  /* <View style={styles.photoThumb}>
            <TouchableOpacity>
              <Image
                style={styles.photoIcon}
                source={require("../assets/images/group.png")}
              ></Image>
            </TouchableOpacity>
          </View> */
}
