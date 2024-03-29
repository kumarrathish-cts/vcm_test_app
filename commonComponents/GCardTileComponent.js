import React from "react";
import { View, Text, TouchableOpacity, StyleSheet , Image } from "react-native";
import PropTypes from 'prop-types';

import { convertToDeviceResolution } from '../utils/resolution';

export const styles = StyleSheet.create({
    container:{
        flex:1, 
        flexDirection : 'column',
        borderWidth:2,
        marginTop:'0.1%',
        marginBottom: '5%'
    },
    wrapper:{
        //flex:0.1,
        marginTop:'1%',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    tileContainer:{
        flex:1,
        flexDirection:'row',
        height:convertToDeviceResolution(30),
        width:'90%',
        //borderRightWidth:1,
        //borderLeftWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titileConatainerB:{
        flex: 1,
        flexDirection:'row',
        height:convertToDeviceResolution(30),
        width:'90%',
        //borderLeftWidth:1,
        //borderRightWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    detailStyle:{
        height:convertToDeviceResolution(15),
       // textAlign:'center'
    },
    addMore:{
            height:convertToDeviceResolution(15),
            textAlign:'center',
            color:'red'
        },
    addView : {
        height:20,
        width:20,
        backgroundColor:'#06748C',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    }
});


export const GCardTileComponent = props => (
    <View style={styles.container}>
        <View style={styles.wrapper}>
            <Image  style={styles.stretch}
             source={require('../images/1.png')}>
            </Image>
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
        <Text style={styles.addMore}>
                {"+ Add More"} {/* view more */}
            </Text>
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



