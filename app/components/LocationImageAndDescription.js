import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import colours from '../config/colours';

function LocationImageAndDescription({ location }) {
    return (
    <View>
        <Image style={styles.img} source={{ uri: location.imageUrl }} />
        <Text style={styles.description}>{ location.description }</Text>
    </View>
      )
}

const styles = StyleSheet.create({
    img: {
      width: '100%', 
      height: 300,
      borderColor: "black",
      borderWidth: 1,
      borderRadius: 4,
      marginBottom: 5
    },
    description: {
      fontSize: 20,
      padding: 1,
      backgroundColor: colours.tertiaryCol,
      color: "black",
      textAlign: 'center',
      fontStyle: 'italic',
      borderWidth: 1,
      marginBottom: 10,
      borderRadius: 4
    }
    });

export default LocationImageAndDescription;