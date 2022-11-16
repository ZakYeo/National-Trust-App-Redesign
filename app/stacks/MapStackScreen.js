import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DetailsScreen from '../screens/DetailsScreen';
import MapScreen from '../screens/MapScreen';
import colours from '../config/colours';
import localData from '../assets/all-places.json'
import SearchButton from '../components/SearchButton';
import FilterButton from '../components/FilterButton';

/**
   * Native Stack to handle the navigation on the "Map" Screen
   * @return                      Returns a MapStack.Navigator component     
   */
export default function MapStackScreen() {
  
    const [data, setData] = useState(Object.values(localData)); // This will store the location information from National Trust
  
    const MapStack = createNativeStackNavigator();
  
    return (
      <MapStack.Navigator>
        <MapStack.Screen name="MapScreen"
        options={({ navigation }) => ({
          title: "National Trust Map",
          headerTintColor: colours.tertiaryCol,
          headerLeft: () => (
            <Image style={styles.logo}source={require("../assets/logo_white.png")} />
          ),
          headerRight: () => (
            <View style={{flexDirection: "row"}}>
                <FilterButton     data={data} setData={setData}></FilterButton>
                <SearchButton data={data} setData={setData}></SearchButton>
              </View>
          ),
          headerStyle: {backgroundColor: colours.primaryCol}
        })}
        >
          {(props) => <MapScreen data={data} {...props}></MapScreen> }
        </MapStack.Screen>
        <MapStack.Screen name="MapDetails" component={DetailsScreen} 
        options={({ route }) => ({ title: route.params.item.title,
          headerStyle: {backgroundColor: colours.primaryCol},
          headerTintColor: colours.tertiaryCol })}/>
      </MapStack.Navigator>
    );
  }
  
const styles = StyleSheet.create({
  logo: {
    width: 30, 
    height: 30, 
    marginRight: 15
  }
  });