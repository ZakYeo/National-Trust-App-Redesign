import React, {useState} from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';

import myData from '../assets/all-places.json';
import colours from '../config/colours';

export default function TagFilter({data, setData}){
    const [openTodayFilter, setOpenTodayFilter] = useState(false);
  const [closedTodayFilter, setClosedTodayFilter] = useState(false);
  const [partiallyOpenFilter, setPartiallyOpenFilter] = useState(false);
  const [eventFilter, setEventFilter] = useState(false);

  function applyOpenTimeFilter({oData, openString}){
    return oData.filter(function(location) {
      if(location.openingTimeStatus){
        return location.openingTimeStatus.toLowerCase() === openString;
      }
      return false;
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
          const oData = Object.values(myData);
          const openString = "open today";   
          if(openTodayFilter){
            setOpenTodayFilter(false);
            setData(oData);
            
          }else{
            setOpenTodayFilter(true);
            setData(applyOpenTimeFilter({oData, openString}));
            setEventFilter(false);
            setClosedTodayFilter(false);
            setPartiallyOpenFilter(false);
          }
        }}>
          <Text style={[styles.tags, openTodayFilter ? {backgroundColor: "green"} : {backgroundColor: "white"}]}>Open</Text>
        </Pressable>
        <Pressable onPress={() => {   
          const oData = Object.values(myData) 
          const openString = "closed today";      
          if(closedTodayFilter){
            setClosedTodayFilter(false);
            setData(oData);
          }else{
            setClosedTodayFilter(true);
            setData(applyOpenTimeFilter({oData, openString}));
            setOpenTodayFilter(false);
            setEventFilter(false);
            setPartiallyOpenFilter(false);
          }
        }}>
        <Text style={[styles.tags, closedTodayFilter ? {backgroundColor: "green"} : {backgroundColor: "white"}]}>Closed</Text>
        </Pressable>
        <Pressable onPress={() => {   
          const oData = Object.values(myData);
          const openString = "partially open today";     
          if(partiallyOpenFilter){
            setPartiallyOpenFilter(false);
            setData(oData);
          }else{
            setData(applyOpenTimeFilter({oData, openString}));
            setOpenTodayFilter(false);
            setClosedTodayFilter(false);
            setPartiallyOpenFilter(true);
            setEventFilter(false);
          }
        }}>
        <Text style={[styles.tags, partiallyOpenFilter ? {backgroundColor: "green"} : {backgroundColor: "white"}]}>Partially Open</Text>
        </Pressable>
        <Pressable onPress={() => {   
          const oData = Object.values(myData)       
          if(eventFilter){
            setEventFilter(false);
            setData(oData);
          }else{
            setEventFilter(true);
            setData(applyEventFilter({oData}));
            setOpenTodayFilter(false);
            setClosedTodayFilter(false);
            setPartiallyOpenFilter(false);
          }
        }}>
        <Text style={[styles.tags, eventFilter ? {backgroundColor: "green"} : {backgroundColor: "white"}]}>Event(s)</Text>
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