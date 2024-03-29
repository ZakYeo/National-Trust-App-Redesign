
import React, { useState } from 'react';
import { View, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import FilterModal from '../components/FilterModal';

/**
   * Component to represent a custom calendar
   * @param  {String} data      The list of location data from the National Trust API
   * @param {Object}  setData   Set the value of data
   * @return                    Returns a pressable filter icon
   */
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