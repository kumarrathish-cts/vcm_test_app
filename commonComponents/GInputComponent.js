import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import { convertToDeviceResolution } from '../utils/resolution';

/* **************************\
  Function: GInputComponent
  Explanation:
  Custom component for Input Field, where ever in project need of
  Input Fields this can be resued by giving  props value
\************************** */

export const styles =  StyleSheet.create({

    textInputStyle : {
        fontSize: 20,
        fontWeight: "bold",
        height:convertToDeviceResolution(20),
        alignItems : 'center',
        justifyContent : 'center'
        //lineHeight:convertToDeviceResolution(20),
    },

    inputBoxStyle : {
        height:convertToDeviceResolution(20),
        backgroundColor : "#FFFFFF",
        width : '90%',
        //marginBottom : '3%',
        borderRadius:1,
        justifyContent: "center",
        //alignItems:'flex-start',
        borderWidth : 1,
        borderColor : "#FFFFFF"
    }

});

export const GInputComponent = props => (
    <View style={[styles.inputBoxStyle]}>
        <TextInput 
        {...props}
        style={[styles.textInputStyle,props.inputStyle]}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        autoFocus={props.autoFocus}
        editable={props.editable}
        onBlur={props.onBlur}
        onChange={props.onChange}
        onChangeText={props.onChangeText}
        onFocus={props.onFocus}
        onKeyPress={props.onKeyPress}
        keyboardType={props.keyboardType}
        returnKeyType={props.returnKeyType}
        maxLength={props.maxLength}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        selectionColor={props.selectionColor}
        underlineColorAndroid={props.underlineColorAndroid}
        autoCapitalize={props.autoCapitalize}
      >
      {props.inputText}
      </TextInput>
    </View>   
  );
  
  GInputComponent.propTypes = {
    inputStyle: PropTypes.any,
    value : PropTypes.any,
    secureTextEntry: PropTypes.bool.isRequired,
    autoFocus: PropTypes.bool,
    editable: PropTypes.bool,
    inputText: PropTypes.string.isRequired,
    keyboardType : PropTypes.string,
    returnKeyType : PropTypes.string,
    onBlur: PropTypes.func,
    onChange : PropTypes.func,
    onChangeText : PropTypes.func,
    maxLength : PropTypes.number,
    multiline : PropTypes.bool,
    numberOfLines : PropTypes.number,
    placeholder : PropTypes.string,
    placeholderTextColor : PropTypes.string,
    selectionColor : PropTypes.string,
    underlineColorAndroid : PropTypes.string,
    autoCapitalize : PropTypes.string
  };
  
  GInputComponent.defaultProps = {
    inputStyle: {},
    value: null,
    autoFocus: true,
    editable: true,
    keyboardType : "default",
    returnKeyType : "next",
    onBlur : null,
    onChange : null,
    onChangeText : null,
    maxLength : 100,
    multiline : false,
    numberOfLines : 1,
    placeholder : "",
    placeholderTextColor : null,
    selectionColor: null,
    underlineColorAndroid : null,
    autoCapitalize : "none"
  };
  
  export default GInputComponent;