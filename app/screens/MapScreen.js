import React, {useEffect, useState} from 'react';
import { View, Text, Button, DrawerButton, Image, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';

import DetailsScreen from './DetailsScreen';

import tabBarColor from '../config/constants.js';

import myData from '../assets/all-places.json';

function MapScreen({navigation}) {

  //const [data, setData] = useState();
  const data = Object.values(myData);

  const mapview = (
    <MapView
         style={{ flex: 1 }}
         provider={PROVIDER_GOOGLE}
         showsUserLocation={true}
         initialRegion={{
          latitude: 50.721680,
          longitude: -1.878530,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421}}
          animationEnabled={false}
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
              <View style={{    borderWidth: 1,borderColor: 'black'}}>
                <Text style={styles.title}>{location.title}</Text>
                <Text style={styles.description}>{location.description}</Text>
                
              </View>
                <Text style={styles.clickme}>Press For More Details!</Text>
            </MapView.Callout>
        </Marker>
      )}
      </MapView>
  );

    return (
      <View style={styles.container}>
        {mapview}
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