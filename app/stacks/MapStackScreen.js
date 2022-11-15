import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '../screens/DetailsScreen';
import MapScreen from '../screens/MapScreen';
import colours from '../config/colours';

/**
   * Native Stack to handle the navigation on the "Map" Screen
   * @param  {String} data        The National Trust API's location data [State Variable].
   * @return                      Returns a MapStack.Navigator component     
   */
export default function MapStackScreen({data}) {
    const MapStack = createNativeStackNavigator();
  
    return (
      <MapStack.Navigator>
        <MapStack.Screen name="MapScreen"
        options={({ navigation }) => ({
          title: "National Trust Map",
          headerLeft: () => (
            <Image style={styles.logo}source={require("../assets/national_trust_screen_logo_black_no_text.png")} />
          ),
          headerStyle: {backgroundColor: colours.primaryCol}
        })}
        >
          {(props) => <MapScreen data={data} {...props}></MapScreen> }
        </MapStack.Screen>
        <MapStack.Screen name="MapDetails" component={DetailsScreen} 
        options={({ route }) => ({ title: route.params.item.title,
          headerStyle: {backgroundColor: colours.primaryCol} })}/>
      </MapStack.Navigator>
    );
  }
  
const styles = StyleSheet.create({
  logo: {
    width: 30, 
    height: 30, 
    marginRight: 25
  }
  });