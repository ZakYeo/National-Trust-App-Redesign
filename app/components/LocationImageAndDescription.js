import React, { useState, useEffect } from 'react';
import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import colours from '../config/colours';

import Map from './Map';
import ContactButtons from './ContactButtons';

import * as Location from 'expo-location';
import { getDistance } from 'geolib';

import constants from '../config/constants';

function LocationImageAndDescription({ location }) {
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
        <View style={{
                      width: 75,
                      height: 5,
                      backgroundColor: "green",
                    }} />
        <Text style={styles.description}>{ location.description }</Text>
        <View style={{
                      width: '100%',
                      height: 5,
                      backgroundColor: colours.primaryCol
                    }} />
        <Map data={Object.values({"1": location})} initialRegion={{
                    latitude: location.location.latitude,
                    longitude: location.location.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01}}
                    mapStyle={styles.map}
                    liteMode={true}
                    navigation={undefined} />
        <View style={{
                      width: '100%',
                      height: 5,
                      backgroundColor: colours.primaryCol,
                      marginBottom: 10
                    }} />
        <Calendar onDayPress={day => {
                    var eventsPressed = "";
                    if(location.events){
                      location.events.forEach((event, index) => {
                        if(event.beginDay === day.dateString){
                          eventsPressed += `${event.name}: ${event.beginTime}-${event.endTime}\n`;
                        }
                      })
                    }
                    if(eventsPressed.length > 0){
                      Alert.alert(
                        `Events On ${day.dateString}`,
                        eventsPressed);
                    }
                    // day {"dateString": "2022-11-10", "day": 10, "month": 11, "timestamp": 1668038400000, "year": 2022}
                  }}
                  markedDates={markedEvents}>
        </Calendar>
        <View style={{
                      width: '100%',
                      height: 5,
                      backgroundColor: colours.primaryCol,
                      marginBottom: 10
                    }} />
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
    }
    });

export default LocationImageAndDescription;