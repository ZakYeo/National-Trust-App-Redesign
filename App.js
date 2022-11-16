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
  //Return the bottom tab navigation panel with our chosen icons
  return (
    <NavigationContainer>
      <MainNavigationStack/>
    </NavigationContainer>
  );
}

//TODO

// KNOWN ISSUES:
// - Display image in custom callout
// - Filters & Search not functioning properly (useState with data)


//TODO
// - Use State for map and discover (separate)
// - Fix search
// - Fix filters
// - Add sort by
// - Search on the map?
// - MapScreen.js -> change initial region

// TO FINISH:
// - Check on another device (seems fine)
// - Add more event dummy data (?)
// - Polygon bound by geojson data on Details screen from API
// - Comments up to standards! ES6?
// - Use constants.js