import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MapStackScreen from './app/screens/MapScreen';
import DiscoverStackScreen from './app/screens/DiscoverScreen';

import colours from './app/config/colours';

export default function App() {

  const Tab = createBottomTabNavigator();
  const [data, setData] = useState(false);

  useEffect(() => {
    (async () => {
      try{
        fetch("https://www.nationaltrust.org.uk/search/data/all-places").then((res) => res.json())
        .then((curData) => {
          var newData = Object.values(curData);
          newData[1].events = [{"name": "Guided Morning Walk", "beginDay":"2022-11-10", "beginTime": "08:00", "endTime": "11:00"},
                              {"name": "Guided Morning Walk", "beginDay":"2022-11-10", "beginTime": "08:00", "endTime": "11:00"},
                              {"name": "Guided Morning Walk", "beginDay":"2022-11-11", "beginTime": "08:00", "endTime": "11:00"}];
          setData(Object.values(curData));
        })
      } catch(e){
        console.warn(e);
      }
    })();
    return () => {}}, []);

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
        <Tab.Screen name="Map">
          {(props) => <MapStackScreen data={data} setData={setData} {...props}></MapStackScreen> }
        </Tab.Screen>
        <Tab.Screen name="Discover">
        {(props) => <DiscoverStackScreen data={data} setData={setData} {...props}></DiscoverStackScreen> }
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//TODO

// KNOWN ISSUES:
// - Display image in custom callout

// TO FINISH:
// - Check on another device
// - Use API for places data
// - FILTERS:
//    - Add more event dummy data (new file and function?)
//    - Colour tags in each item of the flat list
// - Polygon bound by geojson data on Details screen from API
// - Global state?