import React from 'react';
import { View, Text, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from './DetailsScreen';

function WhatsOnScreen(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(225,224,219)'}}>
            <Text>What's On screen</Text>
        </View>
    );
}

const WhatsOnStack = createNativeStackNavigator();

function WhatsOnStackScreen() {
  return (
    <WhatsOnStack.Navigator>
      <WhatsOnStack.Screen name="What's On" component={WhatsOnScreen} 
        options={({ navigation }) => ({
          title: "What's On",
          headerLeft: () => (
            <Image style={{width: 30, height: 30, marginRight: 25}}source={require("../assets/national_trust_screen_logo_black_no_text.png")} />
          ),})}
        />
    </WhatsOnStack.Navigator>
  );
}

export default WhatsOnStackScreen;