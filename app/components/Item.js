import React from 'react';
import {View, Image, Text, Pressable, StyleSheet} from 'react-native';

import colours from '../config/colours';

function RenderItem({ item, navigation, screenName }){
  const Line = ({color}) => {
    return <View style={[styles.square, {backgroundColor: color}]} />;
  };
  return (
      <View style={styles.item}>
         <Pressable onPress={() => {
      navigation.push(screenName, {item: item})
    }}>
        <View style={{flex: 1}}>
            <Image style={{width: '100%', height: 150}} source={{ uri: item.imageUrl }} />
        </View>
        <View style={{flex: 1, paddingTop: 10, paddingLeft: 10, paddingRight: 10}}>
        <Line color="green"/>
            <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.subTitle}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={{flexDirection: 'row'}}>
              {item.openingTimeStatus ? <Text style={styles.tags}>{item.openingTimeStatus}</Text> : ""}
              {item.events ? <Text style={styles.tags}>Event(s) Available</Text> : ""}
            </View>
        </View>
        </Pressable>
        
        </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    paddingLeft: 0,
    color: "black",
    fontWeight: '450'
  },
  subTitle: {
    fontSize: 14,
    color: "black",
    fontStyle: 'italic',
    paddingLeft: 3,
    fontWeight: '300'
  },
  item: {
      backgroundColor: colours.tertiaryCol,
      marginVertical: 5,
      marginHorizontal: 8,
      flexDirection: 'column',
      borderWidth: 1
    },
  square: {
      marginTop: 5,
      width: 75,
      height: 5,
    },
  description: {
    paddingTop: 20,
    fontWeight: '300',
    fontSize: 15,
    paddingBottom: 25
    },
    calendar: {
      borderTopWidth: 1,
      borderColor: "black",
      marginBottom: 20
    },
    tags: {
      fontWeight: '300',
      backgroundColor: "white",
      fontSize: 13,
      padding: 5,
      marginBottom: 10,
      marginRight: 10,
      borderRadius: 20,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2
        },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5

    }
  });


export default RenderItem;