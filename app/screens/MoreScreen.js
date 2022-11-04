import React from 'react';
import { View, Text, Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function MoreScreen(props) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor: 'rgb(225,224,219)' }}>
            <Text>More screen</Text>
        </View>
    );
}

const MoreStack = createNativeStackNavigator();

function MoreStackScreen() {
  return (
    <MoreStack.Navigator>
      <MoreStack.Screen name="More" component={MoreScreen} 
      options={({ navigation }) => ({
        title: "More",
        headerLeft: () => (
          <Image style={{width: 30, height: 30, marginRight: 25}}source={require("../assets/national_trust_screen_logo_black_no_text.png")} />
        ),})}
        />
    </MoreStack.Navigator>
  );
}

export default MoreStackScreen;