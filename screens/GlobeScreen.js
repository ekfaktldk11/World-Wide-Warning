import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// import { ZoomableMap, Marker } from 'react-native-simple-maps';
// import * as SVG from 'react-native-svg';
// import WorldMap from 'react-native-world-map-svg';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
const GlobeScreen = props => {

    return (
        <View style={styles.container}>
        <MapView style={styles.map}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            }}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default GlobeScreen;

