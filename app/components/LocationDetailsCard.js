import React, { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import { Calendar } from 'react-native-calendars';

import colours from '../config/colours';

import Map from './Map';
import ContactButtons from './ContactButtons';
import CustomCalendar from './CustomCalendar';

import * as Location from 'expo-location';
import { getDistance } from 'geolib';

import constants from '../config/constants';

function LocationDetailsCard({ location }) {
  const [deviceLocation, setDeviceLocation] = useState(null);
  const [markedEvents, setMarkedEvents] = useState(null);

  // https://docs.expo.dev/versions/latest/sdk/location/
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      let deviceLocation = await Location.getCurrentPositionAsync({});
      setDeviceLocation(deviceLocation);

      var markedEvents = {};

      if(location.events){
        location.events.forEach((event, index) => {
          var dateStr = event.beginDay
          markedEvents[dateStr] = {selected: true, marked: true, selectedColor: colours.primaryCol}
        })
      setMarkedEvents(markedEvents);
  }
    })();
  }, []);

    return (
    <View>
        <Image style={styles.img} source={{ uri: location.imageUrl }} />
        <View style={styles.infoText}>
        <Text style={styles.title}>{location.title}</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 3}}>
            <Text style={styles.subTitle}>{location.subTitle}</Text>
          </View>
          <View style={{flex: 1.3,alignItems: 'flex-end'}}>
          <Text style={styles.subTitle}>
            {deviceLocation ?
              Math.round(getDistance(deviceLocation.coords, location.location) / constants.metres_to_miles) + " miles"
              : ""}
          </Text>
          </View>
        </View>
        <View style={styles.greenLine} />
        <Text style={styles.description}>{ location.description }</Text>
        <View style={styles.blueLine} />
        <Map data={Object.values({"1": location})} initialRegion={{
                    latitude: location.location.latitude,
                    longitude: location.location.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01}}
                    mapStyle={styles.map}
                    liteMode={true}
                    navigation={undefined} />
        <View style={styles.blueLine} />
        <CustomCalendar location={location} markedEvents={markedEvents}/>
        <View style={styles.blueLine} />
        <ContactButtons />
        </View>
    </View>
      )
}

const styles = StyleSheet.create({
    img: {
      width: '100%', 
      height: 300
    },
    description: {
      fontSize: 17,
      padding: 1,
      backgroundColor: "white",
      color: "black",
      marginBottom: 40,
      marginTop: 20
    },
    title: {
      fontSize: 26,
      paddingLeft: 0,
      color: "black",
      fontWeight: '450'
    },
    subTitle: {
      fontSize: 14,
      color: "black",
      fontStyle: 'italic',
      fontWeight: '300',
      paddingLeft: 3,
      paddingBottom: 7
      
    },
    infoText: {
      marginTop: 10,
      marginLeft: 20,
      marginRight: 20
    },
    map: {
      flex: 1, 
      minHeight: 130, 
      height: '100%',
      marginBottom: 10,
      marginTop: 10
    },
    mapText: {
      marginTop: 5,
      marginBottom: 5,
      fontSize: 18,
      fontWeight: '450'
    },
    greenLine: {
        width: 75,
        height: 5,
        backgroundColor: "green",
    },
    blueLine: {
      width: '100%',
      height: 5,
      backgroundColor: colours.primaryCol
    }
    });

export default LocationDetailsCard;