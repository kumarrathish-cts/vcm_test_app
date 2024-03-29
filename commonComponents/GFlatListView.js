import React from "react";
import { Text, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import { convertToDeviceResolution } from '../utils/resolution';

const styles = StyleSheet.create({
flatListView : {
    borderWidth:1, 
    width : '48%',
    justifyContent:'center',
    alignItems:'center',
    height:convertToDeviceResolution(30)
}
});


export const GFlatListView = (props) => (
    <View style={styles.flatListView}>
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