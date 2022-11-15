import React from 'react';
import { View, StyleSheet } from 'react-native';

import Map from '../components/Map.js'

/**
   * Screen to show an interactive Map with marked locations of the National Trust.
   * Tap Markers for more information. Tap the Callout for a detailed screen of selected location.
   * @param  {String} navigation  Used to navigate between screens.
   * @param  {String} data        The National Trust API's location data [State Variable].
   * @return                      Returns a View with the Map component inside.    
   */
function MapScreen({navigation, data}) {

    return (
      <View style={styles.container}>
        <Map data={data} initialRegion={{
            latitude: 50.721680,
            longitude: -1.878530,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421}} mapStyle={{ flex: 1 }} liteMode={false} navigation={navigation}></Map>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 , 
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black"
  }
});

export default MapScreen;