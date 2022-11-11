import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';

import myData from '../assets/all-places.json';
import colours from '../config/colours';

export default function TagFilter({data, setData}){
  const [filter, setFilter] = useState("none");

  function applyOpenTimeFilter({data, openString}){
    return data.filter(function(location) {
      if(location.openingTimeStatus){
        return location.openingTimeStatus.toLowerCase() === openString;
      }
    });
  }

  function applyEventFilter({oData}){
    return oData.filter(function(location) {
        return location.events;
    });
  }

    return (
      <View style={{
        height: 30,
        width: "100%",
        backgroundColor: colours.secondaryCol,
        flex: 1,
        flexDirection: 'row',
        margin: 5
      }}>
        <Pressable onPress={() => {   
          //const openString = "open today";
          setFilter(filter==="open" ? "" : "open");  
          //setData(applyOpenTimeFilter({data, openString}));
            
        }}>
          <Text style={[styles.tags, filter=="open" ? {backgroundColor: "green"} : {backgroundColor: "white"}]}>Open</Text>
        </Pressable>
        <Pressable onPress={() => {   
          setFilter(filter==="closed" ? "" : "closed"); 
        }}>
        <Text style={[styles.tags, filter==="closed" ? {backgroundColor: "green"} : {backgroundColor: "white"}]}>Closed</Text>
        </Pressable>
        <Pressable onPress={() => {   
          setFilter(filter==="partial" ? "" : "partial"); 
        }}>
        <Text style={[styles.tags, filter==="partial" ? {backgroundColor: "green"} : {backgroundColor: "white"}]}>Partially Open</Text>
        </Pressable>
        <Pressable onPress={() => {   
          setFilter(filter==="events" ? "" : "events"); 
        }}>
        <Text style={[styles.tags, filter==="events" ? {backgroundColor: "green"} : {backgroundColor: "white"}]}>Event(s)</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: colours.secondaryCol,
      flex: 1,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "black"
    },
    header: {
      fontSize: 32,
      backgroundColor: "#fff"
    },
    title: {
      fontSize: 24,
      paddingLeft: 0,
      
    },
    subTitle: {
      fontSize: 12,
      paddingLeft: 3,
    },
    description: {
      fontSize: 15,
      paddingLeft: 3
    },
    img: {
      width: 30, 
      height: 30, 
      marginRight: 25
    },
    tags: {
      fontSize: 13,
      padding: 5,
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
      elevation: 5,
      maxWidth: 120,
      height: 25
  
    },
    bgPrimary: {
      backgroundColor: colours.primaryCol
    }
  });