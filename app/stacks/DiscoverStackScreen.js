import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '../screens/DetailsScreen';
import DiscoverScreen from '../screens/DiscoverScreen'
import SearchButton from '../components/SearchButton';
import colours from '../config/colours';

/**
   * Native Stack to handle the navigation on the "Discover" Screen
   * @param  {String} data        The National Trust API's location data [State Variable].
   * @param  {String} setData     Set the National Trust API's location data [State Variable].
   * @return                      Returns a DiscoverStack.Navigator component     
   */
function DiscoverStackScreen({data, setData}) {

  const DiscoverStack = createNativeStackNavigator();

  //React.useEffect(() => {setData(data.sort((a, b) => a.title < b.title))}, []); // Since auto text input focus relies on useEffect.
  
  
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen name="DiscoverScreen"
        options={({ navigation }) => ({
            title: "Discover",
            headerLeft: () => (
              <Image style={styles.img} 
                source={require("../assets/national_trust_screen_logo_black_no_text.png")} />),
            headerRight: () => (
              <SearchButton data={data} setData={setData}></SearchButton>
            ),
            headerStyle: styles.bgPrimary})}
      >
        {(props) => <DiscoverScreen data={data} setData={setData} {...props}></DiscoverScreen> }
      </DiscoverStack.Screen>
      <DiscoverStack.Screen name="DiscoverDetails" component={DetailsScreen} 
        options={({ route }) => ({ 
          title: route.params.item.title,
          headerStyle: {backgroundColor: colours.primaryCol}
        })}/>
    </DiscoverStack.Navigator>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 30, 
    height: 30, 
    marginRight: 25
  },
  bgPrimary: {
    backgroundColor: colours.primaryCol
  }
});

export default DiscoverStackScreen;