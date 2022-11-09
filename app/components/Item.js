import React from 'react';
import {View, Image, Text, Pressable, StyleSheet} from 'react-native';

import colours from '../config/colours';

function Item({ title, subTitle, img, description }){
  const Line = () => {
    return <View style={styles.square} />;
  };
    return (
        <View style={styles.item}>
        <View style={{flex: 1}}>
            <Image style={{width: '100%', height: 150}} source={{ uri: img }} />
        </View>
        <View style={{flex: 1, paddingTop: 10, paddingLeft: 10, paddingRight: 10}}>
        <Line /> 
            <Text numberOfLines={1} style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
        </View>
    )
}

function RenderItem({ item, navigation }){

  return (
    <Pressable onPress={() => {
      navigation.push("DiscoverDetails", {item: item})
    }}>
      <Item title={item.title} subTitle={item.subTitle}
        img={item.imageUrl} description={item.description}/>
    </Pressable>
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
      backgroundColor: "green",
    },
  description: {
    paddingTop: 20,
    paddingBottom: 25,
    fontWeight: '300',
    fontSize: 15
    }
  });


export default RenderItem;