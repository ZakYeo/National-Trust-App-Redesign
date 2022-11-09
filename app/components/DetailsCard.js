import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import ContactButtons from './ContactButtons.js';
import LocationInformation from './LocationInformation.js';
import LocationImageAndDescription from './LocationImageAndDescription.js';

import Map from './Map.js';
import colours from '../config/colours.js';

function DetailsCard({ item }){
    return (
        <ScrollView>
            <View style={{margin: 5}}>
                <LocationImageAndDescription location={item}/>
                <View style={styles.mapandactivities}>
                    <LocationInformation location={item}/>
                    <Map data={Object.values({"1": item})} initialRegion={{
                    latitude: item.location.latitude,
                    longitude: item.location.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01}}
                    mapStyle={styles.map}
                    liteMode={true}
                    navigation={undefined} />
                </View>
                <ContactButtons />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mapandactivities: {
      flexDirection: 'row',
      backgroundColor: colours.tertiaryCol,
      color: "white",
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 5
  
    },
    map: {
      flex: 2, 
      minHeight: 130, 
      height: '100%'
    }
    });

export default DetailsCard;