import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, FlatList, View, Button, Text, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from './DetailsScreen';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const DATA = [
  {
    title: "Brownsea Island",
    subTitle: "Exmouth, Devon" ,
    img: "https://nt.global.ssl.fastly.net/images/1431924656837-crookhallgardensoctober20222katedevlinoraclewebresized.jpg"
  },
  {
    title: "Location 2",
    subTitle: "Exmouth, Devon",
    img: "https://nt.global.ssl.fastly.net/images/1431923554159-castlefieldviaduct.jpg" 
  },
  {
    title: "Location 3",
    subTitle: "Exmouth, Devon" ,
    img: "https://nt.global.ssl.fastly.net/images/1431918431507-shtowermillseverntrent.jpg"
  },
  {
    title: "Location 4",
    subTitle: "Exmouth, Devon" 
    ,img: "https://nt.global.ssl.fastly.net/images/1431782871786-dsc0421.jpg"
  },{
    title: "Location 5",
    subTitle: "Exmouth, Devon" 
    ,img: "https://nt.global.ssl.fastly.net/images/1431924656837-crookhallgardensoctober20222katedevlinoraclewebresized.jpg"
  },
  {
    title: "Location 6",
    subTitle: "Exmouth, Devon" 
    ,img: "https://nt.global.ssl.fastly.net/images/1431924656837-crookhallgardensoctober20222katedevlinoraclewebresized.jpg"
  },
  {
    title: "Location 7",
    subTitle: "Exmouth, Devon" 
    ,img: "https://nt.global.ssl.fastly.net/images/1431924656837-crookhallgardensoctober20222katedevlinoraclewebresized.jpg"
  }
];

const Item = ({ title, subTitle, img }) => (
  <View style={styles.item}>
    <View style={{flex: 1}}>
      <Image style={{width: 130, height: 100}} source={{ uri: img }} />
    </View>
    <View style={{flex: 1}}>
      <Text style={styles.title}>{title}</Text>
      <Text>{subTitle}</Text>
    </View>
    
  </View>
);

function DiscoverScreen( {navigation} ) {
  const renderItem = ({ item }) => (
    <Pressable onPress={() => {
      navigation.push("DiscoverDetails", {title: item.title})
    }}>
      <Item title={item.title} subTitle={item.subTitle} img={item.img} />
    </Pressable>
  );

    return (
        <SafeAreaView style={styles.container}>
          <FlatList
        data={DATA}
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
        options={({ route }) => ({ title: route.params.title })}/>
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
    flexDirection: 'row',
    borderWidth: 1,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});

export default DiscoverStackScreen;