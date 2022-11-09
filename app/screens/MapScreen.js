import React, {useEffect, useState} from 'react';
import { View, Text, Button, DrawerButton, Image, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';

import DetailsScreen from './DetailsScreen';

import tabBarColor from '../config/constants.js';

import myData from '../assets/all-places.json';

import Map from '../components/Map.js'

import colours from '../config/colours';

function MapScreen({navigation}) {
  const data = Object.values(myData);

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

const MapStack = createNativeStackNavigator();

function MapStackScreen() {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name="MapScreen" component={MapScreen}
      options={({ navigation }) => ({
        title: "National Trust Map",
        headerLeft: () => (
          <Image style={{width: 30, height: 30, marginRight: 25}}source={require("../assets/national_trust_screen_logo_black_no_text.png")} />
        ),
        headerStyle: {backgroundColor: colours.primaryCol}
      })}
      />
      <MapStack.Screen name="Details" component={DetailsScreen} 
      options={({ route }) => ({ title: route.params.item.title })}/>
    </MapStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 , 
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black"
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  description: {
    textAlign: 'center', 
    maxWidth: 280
  },
  clickme: {
    fontSize: 10,
    textAlign: 'center',
    fontStyle: 'italic',
  }
});

export default MapStackScreen;