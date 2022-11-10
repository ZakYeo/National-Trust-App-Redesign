import React, { useState, useEffect } from 'react';
import {View, Image, Text, Pressable, StyleSheet} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';

import * as Location from 'expo-location';
import { getDistance } from 'geolib';

import constants from '../config/constants';

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
          
            {data.map((location) =>
            <Marker
            key={location.id}
            coordinate={{
            latitude: location.location.latitude,
            longitude: location.location.longitude,
            }}
            title={location.title}
            description={location.description}
            > 
            <MapView.Callout onPress={_ => {
                    navigation.navigate("Details", {item: location});
                }}>
                <View style={{flex: 1, flexDirection: 'row', minHeight: 75}}>
                  <View>
                    <View style={{
                      width: 75,
                      height: 75,
                      borderRadius: 100,
                      backgroundColor: "black",
                      paddingRight: 10
                    }} />
                    <Text style={[styles.distance, styles.subTitle]}>{deviceLocation ?
                      Math.round(getDistance(deviceLocation.coords, location.location) / constants.metres_to_miles) + " miles"
                      : ""}</Text>
                  </View>
                  <View style={{maxWidth: 240, marginLeft: 5}}>

                    <Text numberOfLines={1} style={styles.title}>{location.title}</Text>
                    <Text style={styles.subTitle}>{location.subTitle}</Text>
                    <View style={{
                      width: 75,
                      height: 5,
                      backgroundColor: "green",
                    }} />
                    <Text numberOfLines={2} style={styles.description}>{location.description}</Text>
                  </View>
                </View>
                </MapView.Callout>
            </Marker>
        )}
        </MapView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1 , 
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "black"
    },
    title: {
      fontSize: 20,
      paddingLeft: 0,
      color: "black",
      fontWeight: '475'
    },
    subTitle: {
      fontSize: 13,
      color: "black",
      fontStyle: 'italic',
      paddingLeft: 3,
      fontWeight: '300',
      maxWidth: 200,
    },
    description: {
      maxWidth: 200,
      marginTop: 5,
      marginBottom: 5
    },
    clickme: {
      fontSize: 10,
      textAlign: 'center',
      fontStyle: 'italic',
    },
    distance: {
      textAlign: 'center'
    }
  });

export default Map;