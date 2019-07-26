import React, { Component } from 'react';
 
import {
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

import {GButtonComponent} from '../../commonComponents'
import { WebView } from 'react-native-webview';

import RNHTMLtoPDF from 'react-native-html-to-pdf';

const styles=StyleSheet.create({
    buttonStyle:{
        height:'5%',
        width:'50%',
        justifyContent: "center",
        alignItems:'center',
        borderRadius:1,
        backgroundColor:"#06748C",
        marginTop:'2%'
    }
})
export default class pdfComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            pdfCreated: false
        }
    }
  async createPDF(){
    let options = {
      html: '<h1>PDF TEST</h1>',
      fileName: 'test',
      directory: 'Documents',
    };
 
    let file = await RNHTMLtoPDF.convert(options)
    this.setState({
        filePath: file.filePath,
        pdfCreated : true
    })
    // console.log(file.filePath);
    alert(file.filePath);
  }
 
  render() {
    return(
        !this.state.pdfCreated ? 
      <View style={{flex:1,alignItems:'center'}}>
            <GButtonComponent buttonText={"Create PDF"} onPress={() =>this.createPDF()} buttonStyle={styles.buttonStyle}/>
           {/* <GButtonComponent buttonText={"View PDF"} buttonStyle={styles.buttonStyle}/> */}
      </View> :
      <WebView
      source={{ uri: this.state.filePath }}
      //injectedJavaScript={runFirst}
      //onMessage={this.onMessage}
    /> 
    )
  }
}