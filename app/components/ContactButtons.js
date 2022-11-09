import React from 'react';
import {View, StyleSheet} from 'react-native';

import OpenURLButton from './OpenURLButton';

function ContactButtons(){
    return (
        <>
            <View style={styles.button}>
                <OpenURLButton url={"https://www.nationaltrust.org.uk/"}>Website</OpenURLButton>
            </View>
            <View style={styles.button}>
                <OpenURLButton url={"tel:+441202707744"}>Ring Us</OpenURLButton>
            </View>
            <View style={styles.button}>
                <OpenURLButton url={"mailto:nationaltrust@nationaltrust.org.uk"}>Mail Us</OpenURLButton>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 5
    }
});

export default ContactButtons;