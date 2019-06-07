import { StyleSheet } from "react-native";
import { convertToDeviceResolution } from '../../utils/resolution';



export const styles =  StyleSheet.create({
    containerStyle:{
        flex:1,
        flexDirection: 'column',
        alignItems:'center'
    },
    homeText:{
        fontSize:convertToDeviceResolution(10)
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
    header:{
        height:'10%',
        width:'100%',
        backgroundColor:'#1E90FF',
        justifyContent:'center',
        alignItems:'flex-end',
        padding:'2%'
    },
    itemStyle:{
      height:40,
      width:'100%',
      justifyContent:'center',
      borderBottomWidth:1,
      borderColor:'#1E90FF',
      backgroundColor:'#FFFAFA',
      paddingLeft:10
    }
});