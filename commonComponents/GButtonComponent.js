import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { convertToDeviceResolution } from '../utils/resolution';


/* **************************\
  Function: GButtonComponent
  Explanation:
  Custom component for Button, where ever in project need of
  Buttons this can be resued by giving  props value
\************************** */
const styles =  StyleSheet.create({
buttonStyle:{
  height:convertToDeviceResolution(20),
  width:'90%',
  justifyContent: "center",
  alignItems:'center',
  borderRadius:1,
  backgroundColor:"#06748C",
  marginTop:'2%' 
  
},
buttonTextStyle:{
  fontSize: convertToDeviceResolution(7),
  fontWeight: "bold",
  lineHeight:convertToDeviceResolution(20),
}
});


export const GButtonComponent = props => (
  <TouchableOpacity 
    onPress={props.onPress}
    disabled={props.disabled}
    style={[styles.buttonStyle,props.buttonStyle]}
    activeOpacity={0.8}
    >
    <Text style={[styles.buttonTextStyle,props.textStyle]}>{props.buttonText}</Text>   
  </TouchableOpacity>

);

GButtonComponent.propTypes = {
  disabled : PropTypes.bool,
  buttonStyle: PropTypes.any,
  textStyle: PropTypes.any,
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

GButtonComponent.defaultProps = {
  disabled : false,
  buttonStyle: {},
  textStyle: {}
};

export default GButtonComponent;
