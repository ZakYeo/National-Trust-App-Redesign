import React from 'react';
import {View, StyleSheet} from 'react-native';

import OpenURLButton from './OpenURLButton';
import constants from '../config/constants';

/**
   * Component to represent three OpenURLButtons
   * @return                  View container with three OpenURLButtons
   */
function ContactButtons(){
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <OpenURLButton url={constants.nt_url}>Website</OpenURLButton>
            </View>
            <View style={styles.button}>
                <OpenURLButton url={`tel:${constants.nt_phone}`}>Ring Us</OpenURLButton>
            </View>
            <View style={styles.button}>
                <OpenURLButton url={`mailto:${constants.nt_mail}`}>Mail Us</OpenURLButton>
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