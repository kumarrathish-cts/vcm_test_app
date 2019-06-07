import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import { convertToDeviceResolution } from '../utils/resolution';

const styles = StyleSheet.create({

});


export const GFlatListView = (props) => (
<View style={{borderWidth:1, width : '50%',justifyContent:'center',alignItems:'center',height:convertToDeviceResolution(30)}}>
<Text>
    {props.displayData}
</Text>
</View>
);

GFlatListView.propTypes = {
    displayData : PropTypes.string
}

GFlatListView.defaultProps = {

}

export default GFlatListView;