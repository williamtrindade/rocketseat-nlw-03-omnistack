import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarker from './src/images/map-marker.png';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map} 
        initialRegion={{
          latitude: -29.6918979,
          longitude: -53.856333,
          latitudeDelta: 0.000,
          longitudeDelta: 0.000,
        }} 
        >
          <Marker 
            icon={mapMarker}
            coordinate={{
              latitude: -29.6918979,
              longitude: -53.856333,
            }}
          >
          </Marker>
        </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
});

//-29.6918979,-53.856333,15z