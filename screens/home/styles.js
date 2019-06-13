import { StyleSheet } from "react-native";
import { convertToDeviceResolution } from '../../utils/resolution';



export const styles =  StyleSheet.create({
    containerStyle:{
        flex:1,
        flexDirection: 'column',
        marginLeft : '5%',
        marginRight : '5%'
        //alignItems:'center'
    },
    homeText:{
        fontSize:convertToDeviceResolution(10)
    },
    labeltext:{
        fontSize:20,
        marginBottom:'2%',
        height:30,
        color:'green'
    },
    button:{
        fontSize:convertToDeviceResolution(5)
    },
    buttonStyle:{
        height:convertToDeviceResolution(20),
        width:'90%',
        justifyContent: "center",
        alignItems:'center',
        borderRadius:convertToDeviceResolution(5),
        backgroundColor:"#06748C",
        marginTop:convertToDeviceResolution(10) 
        
    },
    buttonTextStyle:{
        fontSize: convertToDeviceResolution(7),
        fontWeight: "bold",
        lineHeight:convertToDeviceResolution(20),
    },
    floatStyle: {
            //height:convertToDeviceResolution(20),
            width:'90%',
            justifyContent: "center",
            alignItems:'center',
            borderRadius:convertToDeviceResolution(5),
            backgroundColor:"gray",
            marginTop:convertToDeviceResolution(100)    
    },
    floatInput: {
      width: "90%",
      // marginTop : "5%"
      //marginBottom : "5%"
    },
    initialfloatingBorder: {
        marginBottom:'5%',
        paddingTop: "6%",
        width: "100%",
        borderBottomWidth: convertToDeviceResolution(1),
        borderBottomColor: "gray"
    },
});