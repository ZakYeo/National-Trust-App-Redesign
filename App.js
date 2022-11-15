import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import addDummyData from './addDummyData'
import MainNavigationStack from './app/stacks/MainNavigationStack';

import localData from './app/assets/all-places.json'

/**
   * This app is a redesign of the National Trust's current app from the store.
   * @link https://reactnative.dev/docs/navigation
   * @author Zak Yeomanson
*/
export default function App() {
  const [data, setData] = useState(Object.values(localData)); // This will store the location information from National Trust
  
  //Return the bottom tab navigation panel with our chosen icons
  return (
    <NavigationContainer>
      <MainNavigationStack data={data} setData={setData} />
    </NavigationContainer>
  );
}

//TODO

// KNOWN ISSUES:
// - Display image in custom callout
// - Filters & Search not functioning properly (useState with data)

// TO FINISH:
// - Check on another device (seems fine)
// - Add more event dummy data (?)
// - Polygon bound by geojson data on Details screen from API
// - Comments up to standards! ES6?
// - Use constants.js