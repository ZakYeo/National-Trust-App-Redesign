import React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';

import LocationDetailsCard from '../components/LocationDetailsCard.js';

function DetailsScreen( {route} ) {
 
    return (
        <View style={styles.container}>
          <ScrollView>
            <View>
                <LocationDetailsCard location={route.params.item}/>
            </View>
        </ScrollView>
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