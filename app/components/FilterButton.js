
import React, { useState } from 'react';
import {View, Image, Text, Pressable, StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import colours from '../config/colours';
import FilterModal from '../components/FilterModal';

function FilterButton({data, setData}){
    
  const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <FilterModal data={data} setData={setData} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
            <Pressable onPress={() => {
            setModalVisible(true);
            }}>
            <Ionicons style={{paddingRight: 20}} color="black" size={25} name="filter-sharp" />
            </Pressable>
        </View>
    )
}

export default FilterButton;