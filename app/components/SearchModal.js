import React from 'react';
import {View, StyleSheet, Modal, Text, Pressable, TextInput} from 'react-native';

import colours from '../config/colours';


function SearchModal({modalVisible, setModalVisible, setData, data}) {
    const [text, onChangeText] = React.useState("");

    React.useEffect(() => {}, []); // Since auto text input focus relies on useEffect.

    var empty = "";
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
            placeholder="Enter Your Search Here"
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
              <Text style={styles.textStyle}>Search</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                
                onChangeText(empty);
                setData(applyFilter({data, empty}))
                setModalVisible(!modalVisible);}
            }
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
}

function applyFilter({data, text}){
    if(text === undefined){
        return data;
    }
    return data.filter(function(location) {
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
        padding: 35,
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