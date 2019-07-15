import React from "react";
import { Text, StyleSheet, View , FlatList} from "react-native";
import PropTypes from "prop-types";
import { convertToDeviceResolution } from '../utils/resolution';
import { WebView } from 'react-native-webview';


const runFirst = `
            document.body.style.backgroundColor = 'red';
            setTimeout(function() { window.alert('Calling in web View') }, 2000);
            true;
        `;

export const GWebViewComponent = (props) => (
    <WebView
            source={{ uri: props.uri }}
            injectedJavaScript={runFirst}
            //onMessage={this.onMessage}
        /> 
);

GWebViewComponent.propTypes = {
    uri : PropTypes.string.isRequired
}

GWebViewComponent.defaultProps = {
   

}

export default GWebViewComponent;