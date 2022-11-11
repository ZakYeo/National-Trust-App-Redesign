import React, { useState, useEffect } from 'react';
import {View} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import * as Location from 'expo-location';


import MapMarker from './MapMarker';

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