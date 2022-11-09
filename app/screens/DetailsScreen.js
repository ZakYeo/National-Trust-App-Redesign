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
    backgroundColor: colours.secondaryCol,
    flex: 1,
    borderColor: "black",
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  img: {
    width: '100%', 
    height: 300,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 5
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
    fontSize: 20,
    padding: 1,
    backgroundColor: colours.tertiaryCol,
    textAlign: 'center',
    fontStyle: 'italic',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 4
  },
  mapandactivities: {
    flexDirection: 'row',
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 5

  },
  map: {
    flex: 2, 
    minHeight: 130, 
    height: '100%'
  }
  });

export default DetailsScreen;