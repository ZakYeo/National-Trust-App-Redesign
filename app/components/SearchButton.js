import React, { useState } from 'react';
import {View, Pressable } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import SearchModal from '../components/SearchModal';

/**
   * Component to represent a custom calendar
   * @param {String}  data             The list of location data from the National Trust API
   * @param {Object}  setData          Set the value of data
   * @return                           Returns a pressable filter icon
   */
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