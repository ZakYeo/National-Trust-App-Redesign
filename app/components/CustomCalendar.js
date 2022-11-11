import React, { useState, useEffect } from 'react';
import {Alert, StyleSheet} from 'react-native';
import { Calendar } from 'react-native-calendars';

import colours from '../config/colours';

export default function CustomCalendar({location}){
  const [markedEvents, setMarkedEvents] = useState(null);

  useEffect(() => {
    var markedEvents = {};

      if(location.events){
        location.events.forEach((event, index) => {
          var dateStr = event.beginDay
          markedEvents[dateStr] = {selected: true, marked: true, selectedColor: colours.primaryCol}
        })
      setMarkedEvents(markedEvents);
  }
  }, []);
    return (
        <Calendar style={styles.calendar} onDayPress={day => {
            var eventsPressed = "";
            if(location.events){
              location.events.forEach((event, index) => {
                if(event.beginDay === day.dateString){
                  eventsPressed += `${event.name}: ${event.beginTime}-${event.endTime}\n`;
                }
              })
            }
            if(eventsPressed.length > 0){
              Alert.alert(
                `Events On ${day.dateString}`,
                eventsPressed);
            }
            // day {"dateString": "2022-11-10", "day": 10, "month": 11, "timestamp": 1668038400000, "year": 2022}
          }}
          markedDates={markedEvents}>
        </Calendar>
    )
}


const styles = StyleSheet.create({
    calendar: {
        marginTop: 10, 
        marginBottom: 10
    }
});