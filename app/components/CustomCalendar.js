import React, { useState, useEffect } from 'react';
import {Alert, StyleSheet} from 'react-native';
import { Calendar } from 'react-native-calendars';

import colours from '../config/colours';
import constants from '../config/constants';

/**
   * Component to represent a custom calendar
   * @param  {String} location  The specific location from the National Trust API
   * @return                    Returns a custom calendar component
   */
export default function CustomCalendar({location}){
  const [markedEvents, setMarkedEvents] = useState(null);

  useEffect(() => {
    let markedEvents = {};

      if(location.events){
        location.events.forEach((event, index) => {
          let dateStr = event.beginDay
          markedEvents[dateStr] = {selected: true, marked: true, selectedColor: colours.primaryCol}
        })
      setMarkedEvents(markedEvents);
  }
  }, []);
    return (
        <Calendar style={styles.calendar} onDayPress={day => {
            let eventsPressed = "";
            if(location.events){
              location.events.forEach((event, index) => {
                if(event.beginDay === day.dateString){
                  eventsPressed += `${event.name}: ${event.beginTime}-${event.endTime}\n`;
                }
              })
            }
            if(eventsPressed.length > 0){
              Alert.alert(
                `${constants.events_on} ${day.dateString}`,
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