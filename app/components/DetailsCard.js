import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import ContactButtons from './ContactButtons.js';
import LocationInformation from './LocationInformation.js';
import LocationImageAndDescription from './LocationImageAndDescription.js';

import Map from './Map.js';

function DetailsCard({ item }){
    return (
        <ScrollView>
            <View>
                <LocationImageAndDescription location={item}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mapandactivities: {
      borderColor: "black",
      borderWidth: 1,
      marginBottom: 5
  
    },
    map: {
      flex: 1, 
      minHeight: 130, 
      height: '100%'
    }
    });

export default DetailsCard;