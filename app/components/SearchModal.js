import React from 'react';
import {View, StyleSheet, Modal, Text, Pressable, TextInput} from 'react-native';

import colours from '../config/colours';
import localData from '../assets/all-places.json'
import constants from '../config/constants';

/**
   * Component to represent a custom calendar
   * @param {Boolean} modalVisible     Boolean to represent if the modal is shown or not
   * @param {Boolean} setModalVisible  Change the value of modalVisible
   * @param {String}  data             The list of location data from the National Trust API
   * @param {Object}  setData          Set the value of data
   * @return                           Returns a pressable filter icon
   */
function SearchModal({modalVisible, setModalVisible, setData, data}) {
    const [text, onChangeText] = React.useState("");

    let empty = "";
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            autoFocus={true}
            placeholder={constants.search_placeholder}
            onChangeText={(text) => {
                onChangeText(text);
                setData(applyFilter({data, text}));
            }}
            value={text}
            
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setData(applyFilter({data, text}));
                setModalVisible(!modalVisible);}
            }
            >
              <Text style={styles.textStyle}>{constants.search}</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                
                onChangeText(empty);
                setData(applyFilter({data, empty}))
                setModalVisible(!modalVisible);}
            }
            >
              <Text style={styles.textStyle}>{constants.cancel}</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
}

function applyFilter({data, text}){
    if(text === undefined){
        return Object.values(localData);
    }
    return Object.values(localData).filter(function(location) {
        return location.title.toLowerCase().startsWith(text.toLowerCase());
    });
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        width: 200,
        height: 170,
        paddingTop: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        margin: 5,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: colours.primaryCol,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      input: {
        backgroundColor: "lightgray",
        borderColor: "black",
        borderWidth: 1,
        padding: 3,
        marginBottom: 10
      }
});

export default SearchModal;