import React from "react";
import { Text, StyleSheet, View , FlatList} from "react-native";
import PropTypes from "prop-types";
import { convertToDeviceResolution } from '../utils/resolution';

const styles = StyleSheet.create({
    flatListView : {
        borderWidth:1, 
        width : '48%',
        justifyContent:'center',
        alignItems:'center',
        height:convertToDeviceResolution(30)
    },
    container:{
        flex:1,
        marginLeft:'2%'
    },
    headertext:{
        fontSize:20,
        marginBottom:'2%'
    }
});



export const GCommonFlatListView = (props) => (
    <View style={styles.container}>
        <Text style={styles.headertext}>
            {"Flat List View with Two Column Section"}
        </Text>
        <FlatList 
            data={props.data}
            renderItem={props.updateFlatList}
            keyExtractor={(item, index) => item.type}
            horizontal={props.horizontal}
            numColumns={props.numColumns}
            initialNumToRender={props.initialNumToRender}
            onEndReached={props.onEndReached}
            onEndReachedThreshold={props.onEndReachedThreshold}
            inverted={props.inverted}
            initialScrollIndex={props.initialScrollIndex}
            // key={data.names}
        />
    </View>
);

GCommonFlatListView.propTypes = {
    displayData : PropTypes.string,
    renderItem : PropTypes.func,
    onEndReached : PropTypes.func,
    initialScrollIndex : PropTypes.number,
    inverted : PropTypes.number,
    onEndReachedThreshold : PropTypes.number,
    initialNumToRender : PropTypes.number,
    numColumns : PropTypes.number,
    horizontal : PropTypes.bool
}

GCommonFlatListView.defaultProps = {
    renderItem: null,
    onEndReached : null,
    initialScrollIndex : 0,
    inverted : 0,
    onEndReachedThreshold : 0.5,
    initialNumToRender : 10,
    numColumns : 1,
    horizontal : false

}

export default GCommonFlatListView;