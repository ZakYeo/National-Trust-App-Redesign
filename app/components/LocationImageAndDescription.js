import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colours from '../config/colours';

import Map from './Map';
import ContactButtons from './ContactButtons';

function LocationImageAndDescription({ location }) {
    return (
    <View>
        <Image style={styles.img} source={{ uri: location.imageUrl }} />
        <View style={styles.infoText}>
        <Text style={styles.title}>{location.title}</Text>
        <Text style={styles.subTitle}>{location.subTitle}</Text>
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
      paddingLeft: 3,
      fontWeight: '300',
      marginTop: 3,
      marginBottom: 10
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