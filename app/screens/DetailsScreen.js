import React from 'react';
import { View, Text} from 'react-native';

function DetailsScreen( {route} ) {
    const { title } = route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(225,224,219)'}}>
            <Text> Hello { title }</Text>
        </View>
    );
}

export default DetailsScreen;