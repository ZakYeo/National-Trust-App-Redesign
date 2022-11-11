import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from './DetailsScreen';

import RenderItem from '../components/LocationListCard.js'
import SearchButton from '../components/SearchButton';
import TagFilter from '../components/TagFilter.js'

import colours from '../config/colours';



function DiscoverScreen( {navigation, data, setData} ) {

    return (
        <SafeAreaView style={styles.container}>
          <FlatList
        data={data}
        renderItem={({ item, _, __ }) => (
          <RenderItem item={item} navigation={navigation} screenName="DiscoverDetails"/>
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (<TagFilter data={data} setData={setData}/>)}
        ListHeaderComponentStyle={{ borderBottomColor: 'black', borderBottomWidth: 1 }}
      />
        </SafeAreaView>
    );
}

const DiscoverStack = createNativeStackNavigator();

function DiscoverStackScreen({data, setData}) {

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
  container: {
    backgroundColor: colours.secondaryCol,
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black"
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    paddingLeft: 0,
    
  },
  subTitle: {
    fontSize: 12,
    paddingLeft: 3,
  },
  description: {
    fontSize: 15,
    paddingLeft: 3
  },
  img: {
    width: 30, 
    height: 30, 
    marginRight: 25
  },
  tags: {
    fontSize: 13,
    padding: 5,
    marginRight: 10,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
      },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxWidth: 120,
    height: 25

  },
  bgPrimary: {
    backgroundColor: colours.primaryCol
  }
});

export default DiscoverStackScreen;