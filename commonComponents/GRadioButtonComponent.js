import React from "react";
import { View , StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from "prop-types";

export const styles = StyleSheet.create({
    radioButtonLayout : {
        width : '80%', 
        // borderWidth : 2,
       // marginRight : "50%", 
        marginTop : '4%',
       flexDirection: "row",
       marginBottom : '2%'
    },
    outerCircle : {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#33A8FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle : {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#33A8FF'
    },
    questionsSection : {
        height:15, 
        marginLeft : '5%', 
        marginTop: '1%'
    }
});

export const GRadioButtonComponent = props => (
    
    <TouchableOpacity style={styles.radioButtonLayout} onPress={props.onPress}>
        <View style={styles.outerCircle}>
            {
              props.selected ?
                <View style={styles.innerCircle}/>
                : null
            }
        </View>
        <View style={styles.questionsSection}>
            <Text>
                {props.questions}
            </Text>
        </View>
    </TouchableOpacity>
    );

    GRadioButtonComponent.propTypes = {
        onPress: PropTypes.func,
        questions: PropTypes.string,
        selected: PropTypes.bool
      };
      
      GRadioButtonComponent.defaultProps = {
     
      };


export default GRadioButtonComponent;