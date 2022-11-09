import React from 'react';
import { View, StyleSheet} from 'react-native';

import DetailsCard from '../components/DetailsCard.js';
import colours from '../config/colours.js';

function DetailsScreen( {route} ) {
 
    return (
        <View style={styles.container}>
          <DetailsCard item={route.params.item} />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    borderColor: "black",
    borderBottomWidth: 1,
    borderTopWidth: 1
  }
  });

export default DetailsScreen;