import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigationStack from './app/stacks/MainNavigationStack';

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