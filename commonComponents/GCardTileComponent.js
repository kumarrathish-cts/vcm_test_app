import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from 'prop-types';

import { convertToDeviceResolution } from '../utils/resolution';

export const styles = StyleSheet.create({
    container:{
        flex:1, 
        flexDirection : 'row',
        borderWidth:2,
        marginTop:'0.1%'
    },
    wrapper:{
        flex:0.1,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    tileContainer:{
        flex:0.4,
        flexDirection:'column',
        height:convertToDeviceResolution(30),
        width:convertToDeviceResolution(30),
        borderRightWidth:1,
        borderLeftWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titileConatainerB:{
        flex: 0.5,
        flexDirection:'column',
        height:convertToDeviceResolution(30),
        width:convertToDeviceResolution(30),
        borderLeftWidth:1,
        borderRightWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    detailStyle:{
        height:convertToDeviceResolution(15),
        textAlign:'center'
    }
});


export const GCardTileComponent = props => (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Text>
            {"PRO"}
            </Text>
        </View>
        <View style={styles.tileContainer}>
        <Text style={[styles.detailStyle,props.tileStyles]}>
        {props.title}
        </Text>
        </View>
        <View style={styles.titileConatainerB}>
        <Text style={[styles.detailStyle,props.tileStyles]}>
        {props.details}
        </Text>
        </View>
    </View>
);

GCardTileComponent.propTypes = {
    tileStyles : PropTypes.object,
    title : PropTypes.string,
    details : PropTypes.string
}

GCardTileComponent.defaultProps = {

}


export default GCardTileComponent;



