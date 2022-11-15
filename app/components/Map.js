import React, { useState, useEffect } from 'react';
import {View} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

import MapMarker from './MapMarker';

/**
   * Component handles the Map
   * Will request for location permission
   * @param  {String} data            The specific location from the National Trust API
   * @param  {Object} initialRegion   Initial region displayed when rendered
   * @param  {Object} mapStyle        Stylistic choices for the map
   * @param  {Boolean} liteMode       Lite mode for the map
   * @param  {Object} navigation      Used to navigate between screens.     
   * @return                          Returns a MapView with custom callouts
   */
function Map({data,initialRegion, mapStyle, liteMode, navigation}){
  const [deviceLocation, setDeviceLocation] = useState(null);

  // https://docs.expo.dev/versions/latest/sdk/location/
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let deviceLocation = await Location.getCurrentPositionAsync({});
      setDeviceLocation(deviceLocation);
    })();
  }, []);

    return (
        <MapView
            style={mapStyle}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={initialRegion}
            animationEnabled={false}
            liteMode={liteMode}
        >
          {data ? data.map((location) =>
            <MapMarker navigation={navigation} location={location} deviceLocation={deviceLocation}></MapMarker>)
            : <View></View>}
        </MapView>
    )
}

export default Map;