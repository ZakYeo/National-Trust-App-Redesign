import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image} from 'react-native';

function DetailsScreen( {route} ) {
    const { item } = route.params;


    var activities = (
        <Text style={styles.description}>{item.activityTagsAsCsv}</Text>
    )
    
    return (
        <View style={styles.container}>
        <Image style={styles.img} source={{ uri: item.imageUrl }} />
            <View style={{alignContent: 'center'}}>
            <Text style={styles.description}>{item.title}: { item.description }</Text>
            {activities}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(225,224,219)',
    flex: 1,
    borderColor: "black",
    borderBottomWidth: 1
  },
  img: {
    width: '100%', 
    height: '60%',
    borderColor: "black",
    borderWidth: 1,
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
    backgroundColor: "white",
    borderWidth: 1,
    margin: 2,
    textAlign: 'center'
  }
  });

export default DetailsScreen;