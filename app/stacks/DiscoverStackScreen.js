import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '../screens/DetailsScreen';
import DiscoverScreen from '../screens/DiscoverScreen'
import SearchButton from '../components/SearchButton';
import colours from '../config/colours';
import localData from '../assets/all-places.json'
import FilterButton from '../components/FilterButton';
import constants from '../config/constants';

/**
   * Native Stack to handle the navigation on the "Discover" Screen
   * @return                      Returns a DiscoverStack.Navigator component     
   */
function DiscoverStackScreen() {

  const DiscoverStack = createNativeStackNavigator();

  const [data, setData] = useState(Object.values(localData)); // This will store the location information from National Trust

  
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen name="DiscoverScreen"
        options={({ navigation }) => ({
            title: constants.list_title,
            headerTintColor: colours.tertiaryCol,
            headerLeft: () => (
              <Image style={styles.img} 
                source={require("../assets/logo_white.png")} />),
            headerRight: () => (
              <View style={{flexDirection: "row"}}>
                <FilterButton     data={data} setData={setData}></FilterButton>
                <SearchButton data={data} setData={setData}></SearchButton>
              </View>
            ),
            headerStyle: styles.bgPrimary})}
      >
        {(props) => <DiscoverScreen data={data} setData={setData} {...props}></DiscoverScreen> }
      </DiscoverStack.Screen>
      <DiscoverStack.Screen name="DiscoverDetails" component={DetailsScreen} 
        options={({ route }) => ({ 
          title: route.params.item.title,
          headerStyle: {backgroundColor: colours.primaryCol},
          headerTintColor: colours.tertiaryCol 
        })}/>
    </DiscoverStack.Navigator>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 30, 
    height: 30, 
    marginRight: 15
  },
  bgPrimary: {
    backgroundColor: colours.primaryCol
  }
});

export default DiscoverStackScreen;