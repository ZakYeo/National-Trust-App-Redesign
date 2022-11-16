
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapStackScreen from './MapStackScreen.js';
import DiscoverStackScreen from './DiscoverStackScreen.js';
import colours from '../config/colours';

/**
   * Handles the Bottom Tab Navigation. Includes "Map" and "Discover" options
   * @param  {String} data        The National Trust API's location data [State Variable].
   * @param  {String} setData     Set the National Trust API's location data [State Variable].
   * @return                      Returns a Tab.Navigator component     
   */
export default function MainNavigationStack(){

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Map') {
                iconName = focused
                  ? 'map'
                  : 'map-outline';
              } else if (route.name === 'Discover') {
                iconName = focused ? 'compass' : 'compass-outline';
              } else if(route.name == "What's On"){
                iconName = focused ? 'calendar' : 'calendar-outline'
              }else if(route.name == "More"){
                iconName = focused ? 'md-help-circle' : 'md-help-circle-outline'
              }
  

              return (<Ionicons name={iconName} size={size} color={color} />);
            },
            tabBarActiveTintColor: colours.tabBarActiveTintCol,
            tabBarInactiveTintColor: colours.tertiaryCol,
            headerShown: false,
            tabBarStyle: {backgroundColor: colours.primaryCol}
          })}>
          <Tab.Screen name="Map">
            {(props) => <MapStackScreen {...props} /> }
          </Tab.Screen>
          <Tab.Screen name="Discover">
          {(props) => <DiscoverStackScreen {...props} /> }
          </Tab.Screen>
        </Tab.Navigator>
    )
}