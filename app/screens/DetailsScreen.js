import React, { useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, Alert, Linking} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from 'react-native-maps';


import Ionicons from 'react-native-vector-icons/Ionicons';

function DetailsScreen( {route} ) {
    const { item } = route.params;


    var activities = (
        <Text style={styles.description}>{item.activityTagsAsCsv}</Text>
    )

    var mapview = (
      <MapView
         style={{ flex: 2, minHeight: 150, height: '100%'}}
         provider={PROVIDER_GOOGLE}
         showsUserLocation={true}
         liteMode={true}
         initialRegion={{
          latitude: item.location.latitude,
          longitude: item.location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01}}
          animationEnabled={false}
      >
        <Marker
        key={item.id}
        coordinate={{
          latitude: item.location.latitude,
          longitude: item.location.longitude,
        }}
        title={item.title}
        description={item.description}
        /> 
      </MapView>
    )
      
    // https://reactnative.dev/docs/linking
    const OpenURLButton = ({ url, children }) => {
      const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
      }, [url]);
    
      return <Button title={children} onPress={handlePress} />;
    };
    
    return (
        <View style={styles.container}>
          <ScrollView>
            <View style={{margin: 5}}>
              <View>
                <Image style={styles.img} source={{ uri: item.imageUrl }} />
                <Text style={styles.description}>{ item.description }</Text>
              </View>
              <View style={styles.mapandactivities}>
                <View style={{flex: 1, borderRightWidth: 1, borderColor: "black", padding: 4}}>
                  <View style={{flex: 1, flexDirection: "column", justifyContent: 'space-between'}}>
                    <Ionicons size={13} name="location-sharp">
                      <Text>{item.subTitle}</Text>
                    </Ionicons>
                    <Ionicons size={13} name="time-sharp">
                      <Text>{item.openingTimeStatus ? item.openingTimeStatus : "[View On Web]"}</Text>
                    </Ionicons>
                    <Ionicons size={13} name="body">
                      <Text>{item.activityTagsAsCsv ? item.activityTagsAsCsv : "[View On Web]"}</Text>
                    </Ionicons>
                  </View>
                </View>
                {mapview}
              </View>
              <View style={{margin: 5}}>
                <OpenURLButton url={"https://www.nationaltrust.org.uk/"}>Website</OpenURLButton>
              </View>
              <View style={{margin: 5}}>
              <OpenURLButton url={"tel:+441202707744"}>Ring Us</OpenURLButton>
              </View>
              <View style={{margin: 5}}>
              
              <OpenURLButton url={"mailto:nationaltrust@nationaltrust.org.uk"}>Mail Us</OpenURLButton>
              </View>
            </View>
          </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(225,224,219)',
    flex: 1,
    borderColor: "black",
    borderBottomWidth: 1,
    borderTopWidth: 1
  },
  img: {
    width: '100%', 
    height: 300,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 5
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
    padding: 1,
    backgroundColor: "white",
    textAlign: 'center',
    fontStyle: 'italic',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 4
  },
  mapandactivities: {
    flexDirection: 'row',
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 5

  }
  });

export default DetailsScreen;