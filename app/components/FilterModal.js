import React from 'react';
import { View, StyleSheet, Modal, Text, Pressable } from 'react-native';


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
function FilterModal({modalVisible, setModalVisible, setData, data}) {

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
            <Text style={styles.title}>Apply A Filter</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                const filter = constants.filter_opentoday
                setData(applyFilter({data, filter}));
                setModalVisible(!modalVisible);}
            }
            >
              <Text style={styles.textStyle}>Open Today</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                const filter = constants.filter_partialtoday
                setData(applyFilter({data, filter}));
                setModalVisible(!modalVisible);}
            }
            >
              <Text style={styles.textStyle}>Partially Open</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                const filter = constants.filter_closedtoday
                setData(applyFilter({data, filter}));
                setModalVisible(!modalVisible);}
            }
            >
              <Text style={styles.textStyle}>Closed Today</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                const filter = "events"
                setData(applyFilter({data, filter}));
                setModalVisible(!modalVisible);}
            }
            >
              <Text style={styles.textStyle}>Event(s)</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                const filter = ""
                setData(applyFilter({data, filter}));
                setModalVisible(!modalVisible);}
            }
            >
              <Text style={styles.textStyle}>No Filter</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
}

function applyFilter({data, filter}){
    if(filter === ""){
        return Object.values(localData);
    }
    return Object.values(localData).filter(function(location) {
        if(filter === "events"){
            return location.events
        }
        return location.openingTimeStatus === filter;
    });
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      title: {
        fontSize: 20,
        paddingBottom: 10,
        color: "black",
        fontWeight: '450'
      },
      modalView: {
        margin: 50,
        backgroundColor: "white",
        borderRadius: 20,
        width: 200,
        height: 280,
        paddingTop: 2,
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

export default FilterModal;