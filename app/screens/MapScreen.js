import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from './DetailsScreen';

import Map from '../components/Map.js'

import colours from '../config/colours';

function MapScreen({navigation, data}) {

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



function MapStackScreen({data}) {
  const MapStack = createNativeStackNavigator();

  return (
    <MapStack.Navigator>
      <MapStack.Screen name="MapScreen"
      options={({ navigation }) => ({
        title: "National Trust Map",
        headerLeft: () => (
          <Image style={{width: 30, height: 30, marginRight: 25}}source={require("../assets/national_trust_screen_logo_black_no_text.png")} />
        ),
        headerStyle: {backgroundColor: colours.primaryCol}
      })}
      >
        {(props) => <MapScreen data={data} {...props}></MapScreen> }
      </MapStack.Screen>
      <MapStack.Screen name="Details" component={DetailsScreen} 
      options={({ route }) => ({ title: route.params.item.title,
        headerStyle: {backgroundColor: colours.primaryCol} })}/>
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