import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MapStackScreen from './MapScreen';
import DiscoverStackScreen from './DiscoverScreen';
import WhatsOnStackScreen from './WhatsOnScreen';
import MoreStackScreen from './MoreScreen';

import colours from '../config/colours';

const Tab = createBottomTabNavigator();

function MainNavigationPanel(props) {
    return (
        <NavigationContainer>
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

            // You can return any component that you like here!
            return (<Ionicons name={iconName} size={size} color={color} />);
          },
          tabBarActiveTintColor: colours.tabBarActiveTintCol,
          tabBarInactiveTintColor: colours.tertiaryCol,
          headerShown: false,
          tabBarStyle: {backgroundColor: colours.primaryCol}
        })}>
        <Tab.Screen name="Map" component={MapStackScreen} />
        <Tab.Screen name="Discover" component={DiscoverStackScreen} />
        <Tab.Screen name="What's On" component={WhatsOnStackScreen} />
        <Tab.Screen name="More" component={MoreStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    );
}

export default MainNavigationPanel;