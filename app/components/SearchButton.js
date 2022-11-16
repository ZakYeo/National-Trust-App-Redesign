import React, { useState } from 'react';
import {View, Image, Text, Pressable, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import colours from '../config/colours';
import SearchModal from '../components/SearchModal';

function SearchButton({data, setData}){
    
  const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <SearchModal data={data} setData={setData} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
          <Pressable onPress={() => {
            setModalVisible(true);
          }}>
          <Ionicons color="black" size={25} name="search-sharp" />
          </Pressable>
          </View>
    )
}

export default SearchButton;