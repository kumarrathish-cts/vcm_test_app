import React, { Component } from 'react';
import { View, Text,Button, ScrollView , FlatList} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { styles } from './styles';
import { strings } from '../../locales/Lang';
import  { GLoadingSpinnerHOC } from '../../GHOC';
import { GButtonComponent , GInputComponent , 
         GFloatingInputComponent, GRadioButtonComponent, 
         GCheckBoxComponent, GCardTileComponent, GFlatListView, GCounterComponent
} from '../../commonComponents';
// import config from '../../config';
import Config from 'react-native-config';

const HomeComponentWithSpinner = GLoadingSpinnerHOC(View);

const securityQuestions = [
    { index1 : 0, question:"What is your first school?"},
    { index1 : 1, question:"What is your first bike?"},
    { index1: 2, question:"What is your favourite place?"},
]

const usersChoice = [
    {options : "Credit card payment",checked: true},
    {options : "Online Services",checked : false},
    {options : "Mobile banking",checked : true}
]

class HomeComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            radioButton : false,
            radioButtonIndex : null,
            checkBox : false,
            checkBoxIndex : null,
            currentCheckBox : false,
            radioButtonSelected : false,
            usersChoice : [
                {options : "Credit card payment",checked: true},
                {options : "Online Services",checked : false},
                {options : "Mobile banking",checked : true}
            ],
            diffCounter : 0
        }
    }

    throwException = ()=>{
        console.log('Exception from Home Component');
        console.log('baseUrl:-',Config);
        throw new Error('Custom Exception throw from home component');
    }

    radioButtonClicked = (index)=>{
        if(index!==this.state.radioButtonIndex){
            this.setState({ 
                radioButtonIndex : index,
                radioButton : false
            })
        }
        else{
            this.setState({ 
                radioButton : false
            })
        }
    }

    checkBoxClicked = (indexPre,previousValue) => {
       var tempArray = [];
        this.state.usersChoice.map((item,index)=>{
            var temp = Object.assign({}, item);
            if(index === indexPre){
                temp.checked = !previousValue
            }
            tempArray.push(temp)
    })
        this.setState({ 
            usersChoice : tempArray
        })
    }

    updateFlatList = ({item}) => {
        return(
           <GFlatListView displayData={item.names} testData={item.id}/>
        )
    }

    render(){
        return (
            <ScrollView style={{flex:1,flexDirection:'column'}}>
                <HomeComponentWithSpinner style={styles.containerStyle}>
                <Text style={styles.homeText}>{strings("home.welcomeText")}</Text>
                <GButtonComponent 
                disabled
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {strings("common.next")}
                onPress={()=>Actions.detail()}
                />
                <GButtonComponent 
                disabled
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {strings("common.back")}
                onPress={()=>Actions.pop()}
                />
                <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {strings("common.exception")}
                onPress={()=>this.throwException()}
                />
                <View style={{marginTop:'5%'}}>
                    <GInputComponent
                    //textInputStyle={}
                    secureTextEntry={false}
                    inputText={""}
                    placeholder={"Username"}
                    placehlderTextColor={"gray"}
                    autoFocus={true}
                    editable={true}
                    maxLength={100}
                    // value={"Need to clear"}
                    />
                </View>

            <View style={{marginTop:'5%'}}>
                <GInputComponent
                    secureTextEntry={true}
                    inputText={""}
                    placeholder={"Password"}
                    placehlderTextColor={"gray"}
                    autoFocus={true}
                    editable={true}
                    maxLength={10}
                    />
            </View>

                <GFloatingInputComponent
                inputBorder={styles.initialfloatingBorder}
                labelText={"Username"}
                // style={styles.floatStyle}
                value={"FloatLabel"}
                inputStyle={styles.floatInput}
                />

                {securityQuestions.map((item,index) => 
                    index == this.state.radioButtonIndex ? 
                    <GRadioButtonComponent 
                    onPress={()=>this.radioButtonClicked(index)}
                    selected = {true}
                    questions = {item.question}/>
                    :
                    <GRadioButtonComponent 
                    onPress={()=>this.radioButtonClicked(index)}
                    selected = {false}
                    questions = {item.question}/>
                )}

                <GCardTileComponent title={"Account Number"} details={"0000001004067032"} tileStyles={{color:"red"}}/>
                <GCardTileComponent title={"Branch"} details={"Beasant Nagar"}/>
                <GCardTileComponent title={"Name"} details={"MS Washington"} tileStyles={{color:"#33A8FF"}}/>
                <GCardTileComponent title={"Available Balance"} details={"246.31"}/>
                {this.state.usersChoice.map((item,index) =>
                    <GCheckBoxComponent 
                    onPress={()=>this.checkBoxClicked(index,item.checked)}
                    selected = {item.checked}
                    options = {item.options}/>
                )} 
                {/* <Button title={strings("common.back")} onPress={()=>Actions.pop()} />  */}

                <FlatList 
                data={[{id:1,type:'Tree1',names:'Plant A Tree'},{id:2,type:'plant1',names:'Much needed'},
                {id:1,type:'Tree2',names:'Plant A Tree'},{id:2,type:'plant2',names:'Much needed'},
                {id:1,type:'Tree3',names:'Plant A Tree'},{id:2,type:'plant3',names:'Much needed'},
                {id:1,type:'Tree4',names:'Plant A Tree'},{id:2,type:'plant4',names:'Much needed'},
                {id:1,type:'Tree5',names:'Plant A Tree'},{id:2,type:'plant5',names:'Much needed'},
                {id:1,type:'Tree6',names:'Plant A Tree'},{id:2,type:'plant6',names:'Much needed'},
                {id:1,type:'Tree7',names:'Plant A Tree'},{id:2,type:'plant7',names:'Much needed'},
                {id:1,type:'Tree8',names:'Plant A Tree'},{id:2,type:'plant8',names:'Much needed'},
                {id:1,type:'Tree9',names:'Plant A Tree'},{id:2,type:'plant9',names:'Much needed'},
                {id:1,type:'Tree10',names:'Plant A Tree'},{id:2,type:'plant11',names:'Much needed'},
                {id:1,type:'Tree11',names:'Plant A Tree'},{id:2,type:'plant12',names:'Much needed'},
                {id:1,type:'Tree12',names:'Plant A Tree'},{id:2,type:'plant14',names:'Much needed'},
                {id:1,type:'Tree13',names:'Plant A Tree'},{id:2,type:'plant15',names:'Much needed'},
                {id:1,type:'Tree14',names:'Plant A Tree'},{id:2,type:'plant16',names:'Much needed'},
                {id:1,type:'Tree15',names:'Plant A Tree'},{id:2,type:'plant17',names:'Much needed'},
                {id:1,type:'Tree16',names:'Plant A Tree'},{id:2,type:'plant18',names:'Much needed'},
                {id:1,type:'Tree17',names:'Plant A Tree'},{id:2,type:'plant19',names:'Much needed'},
                {id:1,type:'Tree18',names:'Plant A Tree'},{id:2,type:'plant21',names:'Much needed'},
                {id:1,type:'Tree19',names:'Plant A Tree'},{id:2,type:'plant22',names:'Much needed'},]}
                renderItem={this.updateFlatList}
                keyExtractor={(item, index) => item.type}
                //horizontal
                numColumns={2}
                initialNumToRender={1}
                inverted={-1}
                //keyExtractor={(item, index) => item.names}
                // key={data.names}
                />
                <View style={{height:10}}>

                </View>

                 <View style={{flex:1,flexDirection:'row',height:200}}>
                    <View style={{flex:0.2}}>
                        <GCounterComponent 
                        counterValue={this.state.diffCounter} 
                        onAddPress={()=>this.setState({diffCounter:this.state.diffCounter+1})}
                        onMinusPress={()=>this.setState({diffCounter:this.state.diffCounter-1})}
                        />
                    </View> 
                    <View style={{flex:0.5,alignItems:'center',justifyContent:'center',height:100}}>
                    <Text>
                         {this.state.diffCounter}
                     </Text>
                    </View>
                </View>
                
            </HomeComponentWithSpinner>
            </ScrollView>
        );
    }
}

export default HomeComponent;