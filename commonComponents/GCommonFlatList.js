import React from "react";
import { Text, StyleSheet, View , FlatList} from "react-native";
import PropTypes from "prop-types";
import GFlatListView from './GFlatListView';

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

const updateFlatList = ({item}) => {
    return(
       <GFlatListView displayData={item.names} testData={item.id}/>
    )
}

export const GCommonFlatListView = (props) => (<View style={{flex:1,marginLeft:'2%'}}>
<Text style={{fontSize:20,marginBottom:'2%'}}>
    {"Flat List View with Two Column Section"}
</Text>
<FlatList 
data={props.data}
renderItem={updateFlatList}
keyExtractor={(item, index) => item.type}
//horizontal
numColumns={2}
initialNumToRender={1}
//inverted={-1}
//keyExtractor={(item, index) => item.names}
// key={data.names}
/>
</View>
);

GCommonFlatListView.propTypes = {
    displayData : PropTypes.string
}

GCommonFlatListView.defaultProps = {

}

export default GCommonFlatListView;