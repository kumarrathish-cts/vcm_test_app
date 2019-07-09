import React, { Component } from 'react';
import { TextInput, View , Text, StyleSheet} from 'react-native';
import { GSearchComponent } from '../../commonComponents/GSearchComponent';
import { convertToDeviceResolution } from '../../utils/resolution';

var promiseCall = new Promise(function(resolve, reject) {
    setTimeout(function() {
     let nData = [
        {id: 1,text: 'One'},{id: 2,text: 'Two'},
        {id: 3,text: 'Three'},{id : 4,text : "Four"},
        {id : 5,text : "Five"},{id : 6,text : "Six"},
        {id : 7,text : "Seven"},{id : 8,text : "Eight"},
        {id : 9,text : "Nine"},{id : 10,text : "Ten"}
      ];
      resolve(nData);
    }, 5000);
  });

let data = [{id: 1,text: 'One'},{id: 2,text: 'Two'},{id: 3,text: 'Three'},{id : 4,text : "Four"}];
let newData = [{id: 1,text: 'One'},{id: 2,text: 'Two'},{id: 3,text: 'Three'},{id : 4,text : "Four"},{id : 5,text : "Five"},{id : 6,text : "Six"},{id : 7,text : "Seven"},{id : 8,text : "Eight"},{id : 9,text : "Nine"},{id : 10,text : "Ten"}];

const styles = StyleSheet.create({
  container : {
    height:convertToDeviceResolution(50),
    width:'100%'
  },
  listArea :{
    width: '100%',
    height:convertToDeviceResolution(30),
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#6B8E23'
  },
  textArea:{
    marginTop:'10%',
    borderBottomWidth :1
  }
});

 
class searchComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            promiseVal : '',
            flatListData : data,
            loading:false,
            noData : false
        }
    }
      
    promiseCalled = () => {
      let appendArray=[];
        this.state.flatListData.map((item,index) => {
            if(item.text.search(this.state.promiseVal) != -1){
                appendArray.push(item)
            }
        });

        if(appendArray.length > 0){
          this.setState({
            flatListData : appendArray,
            noData : false
        })
        }
        else{
          this.setState({
            //flatListData : [],
            noData:true
        })
        }
    }

    onScrollEnd(e) {
      if(!this.state.loading){
        promiseCall.then((value)=>{
          alert("List is going to update with new data");
           this.setState({flatListData : value,loading:true},()=>{
             console.log(this.state.flatListData)
           })
       });
      }
      else{
        return;
      }
    }
    onChangeMethod = (text) =>{
      if(text == ''){
        this.setState({
          flatListData : newData,
          noData : false,
        //  loading : false
        })
      }
      this.setState({promiseVal:text})
    }

    keyExtractor = item => item.id.toString();

    updateFlatList({ item}) {
        return (
          <View key={item.id} 
            style={styles.listArea}>
            <Text>{item.text}</Text>
          </View>
        )
      }

    render(){
        return(
          <View style={styles.container}>
          <TextInput style={styles.textArea}
          onChangeText={(text) => this.onChangeMethod(text)}
          value={this.state.promiseVal}
          onBlur={this.promiseCalled}>
          </TextInput>
          <TextInput></TextInput>
            <GSearchComponent data={this.state.flatListData} onScroll={(e) => this.onScrollEnd(e)} updateFlatList={this.updateFlatList} noData={this.state.noData}/>
          </View>
        )
    }
}

export default searchComponent;