import React, {useState} from 'react';
import { StyleSheet, SafeAreaView, FlatList, Image, Text, Modal, Pressable, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from './DetailsScreen';

import myData from '../assets/all-places.json';

import RenderItem from '../components/Item.js'

import colours from '../config/colours';

import SearchModal from '../components/SearchModal';

import Ionicons from 'react-native-vector-icons/Ionicons';

function DiscoverScreen( {navigation, data} ) {
    return (
        <SafeAreaView style={styles.container}>
          
          <FlatList
        data={data}
        renderItem={({ item, _, __ }) => (
          <RenderItem item={item} navigation={navigation}/>
        )}
        keyExtractor={item => item.id}
      />
        </SafeAreaView>
    );
}

const DiscoverStack = createNativeStackNavigator();

function DiscoverStackScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(Object.values(myData));
  return (
    <DiscoverStack.Navigator>
      <DiscoverStack.Screen name="Discover" component={({navigation}) => (
        <DiscoverScreen navigation={navigation} data={data}></DiscoverScreen>
      )}
      options={({ navigation }) => ({
        title: "Discover",
        headerLeft: () => (
          <Image style={styles.img} 
            source={require("../assets/national_trust_screen_logo_black_no_text.png")} />
        ),
        headerRight: () => (
          <View>
            <SearchModal data={Object.values(myData)} setData={setData} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
          <Pressable onPress={() => {
            setModalVisible(true);
          }}>
          <Ionicons color="black" size={20} name="search-sharp" />
          </Pressable>
          </View>
        ),
        headerStyle: {backgroundColor: colours.primaryCol}})}
         />
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
  }
});

export default DiscoverStackScreen;