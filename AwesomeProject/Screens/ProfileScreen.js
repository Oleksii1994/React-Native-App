import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { PROVIDER_GOOGLE } from "react-native-maps";
import { styles } from "../styles/createPost.styles";

export const ProfileScreen = () => {
  return (
    // <View>
    //   <Text>ProfileScreen</Text>
    // </View>
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
  );
};
