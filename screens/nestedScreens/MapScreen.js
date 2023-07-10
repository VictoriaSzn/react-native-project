import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => (
  <View style={styles.container}>
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 52.2201,
        longitude: 21.0057,
        latitudeDelta: 0.001,
        longitudeDelta: 0.006,
      }}
    >
      <Marker
        coordinate={{ latitude: 52.2201, longitude: 21.0057 }}
        title="test photo"
      />
    </MapView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;