import React from "react";
import { Text, StyleSheet, View , FlatList,Button} from "react-native";
import PropTypes from "prop-types";
import { convertToDeviceResolution } from '../utils/resolution';

const styles = StyleSheet.create({
    headertext:{
        fontSize:20,
        marginBottom:'2%'
    }
});



export const GPagination = (props) => (
    <View style={styles.container}>
        <Text style={styles.headertext}>
            {"Pagination (or) Swiper Component:"}
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
            //inverted={props.inverted}
            initialScrollIndex={props.initialScrollIndex}
            ListFooterComponent={props.ListFooterComponent}
            ListHeaderComponent={props.ListHeaderComponent}
            pagingEnabled
            onScroll={props.onScroll}
            // key={data.names}
        />
        <View style={{flexDirection:'row',justifyContent:'center'}}>
{props.data.map((newitems,index) =>
    index === props.pageNumber ? 
    <Button
    title="o"
    color="black">
    </Button>:
    <Button
    title="o">
    </Button>
)}
</View>
    </View>
);

GPagination.propTypes = {
    displayData : PropTypes.string,
    renderItem : PropTypes.func,
    onEndReached : PropTypes.func,
    initialScrollIndex : PropTypes.number,
    inverted : PropTypes.number,
    onEndReachedThreshold : PropTypes.number,
    initialNumToRender : PropTypes.number,
    numColumns : PropTypes.number,
    horizontal : PropTypes.bool,
    ListHeaderComponent : PropTypes.func,
    ListFooterComponent : PropTypes.func,
    onScroll : PropTypes.onScroll
}

GPagination.defaultProps = {
    renderItem: null,
    onEndReached : null,
    ListHeaderComponent : null,
    ListFooterComponent : null,
    initialScrollIndex : 0,
    inverted : 0,
    onEndReachedThreshold : 0.5,
    initialNumToRender : 10,
    numColumns : 1,
    horizontal : false,
    onScroll : null

}

export default GPagination;