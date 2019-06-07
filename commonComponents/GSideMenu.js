import React from 'react';
import { StyleSheet, View, Text } from "react-native";

import { convertToDeviceResolution } from '../utils/resolution';



export default class GSideMenu extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.menuHeader}>
                
                </View>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>Logout</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        // paddingRight: 20,
        // paddingLeft: 20,
        // paddingBottom: 10,
    },
    menuHeader:{
        // height:100,
        paddingTop:'30%',
        paddingBottom:'30%',
        width:'100%',
        backgroundColor:'blue'
    },
    menuItem:{
        borderWidth:1,
        justifyContent:'center',
    },
    menuItemText:{
        fontSize:convertToDeviceResolution(7),
        margin:'5%'
    }

});