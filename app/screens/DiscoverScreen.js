import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';

import RenderItem from '../components/LocationListCard.js'
import TagFilter from '../components/TagFilter.js'
import colours from '../config/colours';


/**
   * Screen to show a pressable flat list of all locations provided by the National Trust API.
   * Press an item to view the details screen of that location.
   * @param  {Object} navigation  Used to navigate between screens.
   * @param  {String} data        The National Trust API's location data [State Variable].
   * @param  {String} setData     Set the National Trust API's location data [State Variable].
   * @return                      Returns a flat list rendered with the supplied data      
   */
export default function DiscoverScreen( {navigation, data, setData} ) {

    return (
        <SafeAreaView style={styles.container}>
          <FlatList
        data={data}
        renderItem={({ item, _, __ }) => (
          <RenderItem item={item} navigation={navigation} screenName="DiscoverDetails"/>
        )}
        keyExtractor={item => item.id}
      />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.secondaryCol,
    flex: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "black"
  }
});