import React, { Component } from 'react';
import { View , Text, Dimensions} from 'react-native';
import {  GPagination } from '../../commonComponents';
import { StyleSheet } from "react-native";

class webViewComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            pageNumber : 0
        }
    }

   
    
   
    render(){
        return (
          <GWebViewComponent uri='https://facebook.github.io/react-native' />
        )
    }
}


export default webViewComponent;
