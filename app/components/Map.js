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
                <View style={{flex: 1, flexDirection: 'row', minHeight: 75}}>
                  <View>
                    <View style={{
                      width: 75,
                      height: 75,
                      borderRadius: 100,
                      backgroundColor: "black",
                      paddingRight: 10
                    }} />
                  </View>
                  <View style={{maxWidth: 240, marginLeft: 5}}>

                    <Text numberOfLines={1} style={styles.title}>{location.title}</Text>
                    <Text style={styles.subTitle}>{location.subTitle}</Text>
                    <View style={{
                      width: 75,
                      height: 5,
                      backgroundColor: "green",
                    }} />
                    <Text numberOfLines={2} style={styles.description}>{location.description}</Text>
                  </View>
                </View>
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
      fontSize: 20,
      paddingLeft: 0,
      color: "black",
      fontWeight: '475'
    },
    subTitle: {
      fontSize: 13,
      color: "black",
      fontStyle: 'italic',
      paddingLeft: 3,
      fontWeight: '300',
      paddingBottom: 5
    },
    description: {
      maxWidth: 200,
      marginTop: 5,
      marginBottom: 5
    },
    clickme: {
      fontSize: 10,
      textAlign: 'center',
      fontStyle: 'italic',
    }
  });

export default Map;