import React from 'react';
import {View, Text} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

function LocationInformation({ location }) {

    return (
        <View style={{flex: 1, borderRightWidth: 1, borderColor: "black", padding: 4}}>
            <View style={{flex: 1, flexDirection: "column", justifyContent: 'space-between'}}>
                <Ionicons color="black" size={13} name="location-sharp">
                    <Text>{location.subTitle}</Text>
                </Ionicons>
                <Ionicons color="black" size={13} name="time-sharp">
                    <Text>{location.openingTimeStatus ? location.openingTimeStatus : "[View On Web]"}</Text>
                </Ionicons>
                <Ionicons color="black" size={13} name="body">
                    <Text>{location.activityTagsAsCsv ? location.activityTagsAsCsv : "[View On Web]"}</Text>
                </Ionicons>
            </View>
        </View>
    )
}

export default LocationInformation;