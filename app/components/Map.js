import React from 'react';
import {View, Image, Text, Pressable, StyleSheet} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';

function Map({data,initialRegion, mapStyle, liteMode, navigation}){
    return (
        <MapView
            style={mapStyle}
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
            initialRegion={initialRegion}
            animationEnabled={false}
            liteMode={liteMode}
        >
            {data.map((location) =>
            <Marker
            key={location.id}
            coordinate={{
            latitude: location.location.latitude,
            longitude: location.location.longitude,
            }}
            title={location.title}
            description={location.description}
            > 
            <MapView.Callout onPress={_ => {
                    navigation.navigate("Details", {item: location});
                }}>
                <View style={{    borderWidth: 1,borderColor: 'black'}}>
                    <Text style={styles.title}>{location.title}</Text>
                    <Text style={styles.description}>{location.description}</Text>
                    
                </View>
                    <Text style={styles.clickme}>Press For More Details!</Text>
                </MapView.Callout>
            </Marker>
        )}
        </MapView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1 , 
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: "black"
    },
    title: {
      textAlign: 'center',
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },
    description: {
      textAlign: 'center', 
      maxWidth: 280
    },
    clickme: {
      fontSize: 10,
      textAlign: 'center',
      fontStyle: 'italic',
    }
  });

export default Map;