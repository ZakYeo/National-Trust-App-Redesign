import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, FlatList, View, Button, Text, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from './DetailsScreen';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

import myData from '../assets/all-places.json';

const Item = ({ title, subTitle, img, description }) => (
  <View style={styles.item}>
    <View style={{flex: 1}}>
      <Image style={{width: '100%', height: 150}} source={{ uri: img }} />
    </View>
    <View style={{flex: 1}}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
    
  </View>
);

function DiscoverScreen( {navigation} ) {
  const data = Object.values(myData);
  const renderItem = ({ item }) => (
    <Pressable onPress={() => {
      navigation.push("DiscoverDetails", {item: item})
    }}>
      <Item title={item.title} subTitle={item.subTitle}
        img={item.imageUrl} description={item.description}/>
    </Pressable>
  );

    return (
        <SafeAreaView style={styles.container}>
          <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        </SafeAreaView>
    );
}

const DiscoverStack = createNativeStackNavigator();

function DiscoverStackScreen() {
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen name="Discover" component={DiscoverScreen}
      options={({ navigation }) => ({
        title: "Discover",
        headerLeft: () => (
          <Image style={{width: 30, height: 30, marginRight: 25}}source={require("../assets/national_trust_screen_logo_black_no_text.png")} />
        ),
        headerStyle: {backgroundColor: "white"}})}
         />
      <DiscoverStack.Screen name="DiscoverDetails" component={DetailsScreen} 
        options={({ route }) => ({ title: route.params.item.title })}/>
    </DiscoverStack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(225,224,219)',
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black"
  },
  item: {
    backgroundColor: "white",
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 8,
    flexDirection: 'column',
    borderWidth: 1,
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
    paddingLeft: 3
  },
  description: {
    fontSize: 15,
    paddingLeft: 3
  }
});

export default DiscoverStackScreen;