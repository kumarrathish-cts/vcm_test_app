import React from "react";
import { Text, TouchableOpacity, StyleSheet, View, Button } from "react-native";
import PropTypes from "prop-types";

import { convertToDeviceResolution } from '../utils/resolution';

const styles = StyleSheet.create({

});

export const GCounterComponent = props => (
    <TouchableOpacity>
        <TouchableOpacity onPress={props.onAddPress}>
        <View style={{height:40,width:40,backgroundColor:'green',justifyContent:'center',alignItems:'center',borderRadius:10}}>
            <Text style={{fontSize:20}}>
                {"+"}
            </Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.onMinusPress}>
    <View style={{height:40,width:40,backgroundColor:'#06748C',justifyContent:'center',alignItems:'center',borderRadius:10}}>
        <Text style={{fontSize:20}}>
            {"-"}
        </Text>
    </View>
    </TouchableOpacity>
    </TouchableOpacity>
)

export default GCounterComponent;
