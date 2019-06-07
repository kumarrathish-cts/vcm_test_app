import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { StyleSheet,Modal } from "react-native";
// import { Modal } from 'react-native-router-flux';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      justifyContent: 'space-around',
      padding: 10
    }
  });
  

GActivityIndicatorHOC = (props) =>{

        return (
            // <Modal>
              <View style={[styles.container,props.styles]}>
                  <ActivityIndicator size="large" color="#0000ff" />
              </View>
            //  </Modal>
            );
};

export default GActivityIndicatorHOC;

