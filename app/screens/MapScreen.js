import React, {useEffect, useState} from 'react';
import { View, Text, Button, DrawerButton, Image } from 'react-native';
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
         showsUserLocation
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
        onPress={() => navigation.push("Details", {item: location})}
        >
        </Marker>
      )}
      </MapView>
  );


    return (
      <View style={{ flex: 1 , borderTopWidth: 1, borderBottomWidth: 1, borderColor: "black"}}>
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
      <MapStack.Screen name="Details" component={DetailsScreen} />
    </MapStack.Navigator>
  );
}

export default MapStackScreen;