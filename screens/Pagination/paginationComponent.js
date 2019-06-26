import React, { Component } from 'react';
import { View , Text, Dimensions} from 'react-native';
import {  GPagination } from '../../commonComponents';
import { StyleSheet } from "react-native";
const {width} = Dimensions.get('window');

const data = [
    {
      id: 1,
      text: 'Page 1 in Development',
    },
    {
      id: 2,
      text: 'Page 2 in Development',
    },
    {
      id: 3,
      text: 'Page 3 in Development'
    },
    {
      id : 4,
      text : "For Testing"
    }
  ];
const styles =  StyleSheet.create({
    pageScroll:{
        width: width,
        height:400,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#6B8E23'
    }
});


class paginationComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            pageNumber : 0
        }
    }

    updateFlatList = ({ item}) => {
        return(<View key={item.id} 
            style={styles.pageScroll}>
            <Text>{item.text}</Text>
          </View>
        );
    }

    onScrollEnd(e) {
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;
    
        // Divide the horizontal offset by the width of the view to see which page is visible
        let pageNum = Math.floor(contentOffset.x / viewSize.width);
        this.setState({
          pageNumber : pageNum
        })
      }
    
   
    render(){
        return (
            <GPagination 
            updateFlatList={this.updateFlatList} 
            horizontal 
            data={data} 
            onScroll={(e) => this.onScrollEnd(e)}  
            pageNumber={this.state.pageNumber} 
            />
        )
    }
}


export default paginationComponent;
