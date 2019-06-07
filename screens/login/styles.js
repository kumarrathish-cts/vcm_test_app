import { StyleSheet } from "react-native";
import { convertToDeviceResolution } from '../../utils/resolution';
import { PixelRatio } from 'react-native';




export const styles =  StyleSheet.create({
    containerStyle:{
        flex:1,
        flexDirection: 'column',
        alignItems:'center'
    },
    loginText:{
        fontSize:convertToDeviceResolution(10)
    },
    button:{
        fontSize:convertToDeviceResolution(5)
    },
    buttonStyle:{
        height:'10%',
        width:'90%',
        justifyContent: "center",
        alignItems:'center',
        borderRadius:1,
        backgroundColor:"#06748C",
        marginTop:'2%' 
        
    },
    buttonTextStyle:{
        fontSize: convertToDeviceResolution(12),
        fontWeight: "bold",
        lineHeight:convertToDeviceResolution(20),
    }
});