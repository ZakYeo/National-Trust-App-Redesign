import React from 'react';
import {View, StyleSheet} from 'react-native';

import OpenURLButton from './OpenURLButton';

/**
   * Component to represent three OpenURLButtons
   * @return                  View container with three OpenURLButtons
   */
function ContactButtons(){
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <OpenURLButton url={"https://www.nationaltrust.org.uk/"}>Website</OpenURLButton>
            </View>
            <View style={styles.button}>
                <OpenURLButton url={"tel:+441202707744"}>Ring Us</OpenURLButton>
            </View>
            <View style={styles.button}>
                <OpenURLButton url={"mailto:nationaltrust@nationaltrust.org.uk"}>Mail Us</OpenURLButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginBottom: 1
    },
    button: {
        marginTop: 5,
        marginBottom: 5
    }
});

export default ContactButtons;