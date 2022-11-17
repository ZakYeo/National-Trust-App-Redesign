
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapStackScreen from './MapStackScreen.js';
import DiscoverStackScreen from './DiscoverStackScreen.js';
import colours from '../config/colours';
import constants from '../config/constants.js';

/**
   * Handles the Bottom Tab Navigation. Includes "Map" and "Discover" options
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
              } else if (route.name === 'List') {
                iconName = focused ? 'list-circle' : 'list-circle-outline';
              }
  

              return (<Ionicons name={iconName} size={size} color={color} />);
            },
            tabBarActiveTintColor: colours.secondaryCol,
            tabBarInactiveTintColor: colours.tertiaryCol,
            headerShown: false,
            tabBarStyle: {backgroundColor: colours.primaryCol}
          })}>
          <Tab.Screen name={constants.nav_map}>
            {(props) => <MapStackScreen {...props} /> }
          </Tab.Screen>
          <Tab.Screen name={constants.nav_list}>
          {(props) => <DiscoverStackScreen {...props} /> }
          </Tab.Screen>
        </Tab.Navigator>
    )
}