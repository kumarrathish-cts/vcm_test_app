import React, { Component } from 'react';
import { View, Text,Button, ScrollView , FlatList, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { styles } from './styles';
import { strings } from '../../locales/Lang';
import  { GLoadingSpinnerHOC } from '../../GHOC';
import { GButtonComponent , GInputComponent , 
         GFloatingInputComponent, GRadioButtonComponent, 
         GCheckBoxComponent, GCardTileComponent, GFlatListView, GCounterComponent, GPagination,openCamera
} from '../../commonComponents';
// import config from '../../config';
import Config from 'react-native-config';
import { convertToDeviceResolution } from '../../utils/resolution';

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

  
    

    render(){
        return (
            <ScrollView style={{flex:1,flexDirection:'column'}}>
                <HomeComponentWithSpinner style={styles.containerStyle}>
                <Text style={styles.labeltext}>{"Button Component:"}</Text>
                <GButtonComponent 
                disabled
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {strings("common.next")}
                onPress={()=>Actions.detail()}
                />
                <GButtonComponent 
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

                <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {"Flat List"}
                onPress={()=>Actions.List()}
                />

                <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {"Search"}
                onPress={()=>Actions.search()}
                />

                <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {"Camera"}
                onPress={()=>openCamera()}
                />

                
                <View style={{marginTop:'5%'}}>
                    <Text style={styles.labeltext}>
                        {"Text Input Component:"}
                    </Text>
                    <GInputComponent
                    //textInputStyle={}
                    secureTextEntry={false}
                    inputText={""}
                    placeholder={"Username"}
                    placehlderTextColor={"gray"}
                    autoFocus={true}
                    editable={true}
                    maxLength={100}
                    contextMenuHidden={false}
                    // value={"Need to clear"}
                    />
                </View>

            <View style={{marginTop:'5%',marginBottom:'5%'}}>
                <GInputComponent
                    secureTextEntry={true}
                    inputText={""}
                    placeholder={"Password"}
                    placehlderTextColor={"gray"}
                    autoFocus={true}
                    editable={true}
                    maxLength={10}
                    contextMenuHidden={false}
                    />
            </View>

            <View style={{marginTop:'5%',marginBottom:'5%'}}>
                <GInputComponent
                    secureTextEntry={false}
                    inputText={""}
                    placeholder={"Numeric Field"}
                    placehlderTextColor={"gray"}
                    autoFocus={true}
                    editable={true}
                    maxLength={10}
                    keyboardType={"numeric"}
                    contextMenuHidden={true}
                    />
            </View>

            <View>
            <Text style={styles.labeltext}>
                        {"Floating Label Component:"}
            </Text>
                <GFloatingInputComponent
                inputBorder={styles.initialfloatingBorder}
                labelText={"Username"}
                // style={styles.floatStyle}
                value={"FloatLabel"}
                inputStyle={styles.floatInput}
                />
            </View>


            <Text style={styles.labeltext}>
                        {"Radio Button Component:"}
            </Text>
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

                <Text style={styles.labeltext}>
                        {"Card Tile Component:"}
                </Text>
                <GCardTileComponent 
                title={"Account Number"} 
                details={"0000001004067032"} 
                tileStyles={{color:"black"}
            }
            />
                <GCardTileComponent title={"Branch"} details={"Beasant Nagar"}/>
                <GCardTileComponent title={"Name"} details={"MS Washington"} tileStyles={{color:"black"}}/>
                <GCardTileComponent title={"Available Balance"} details={"246.31"}/>

                <Text style={styles.labeltext}>
                        {"Check Box Component:"}
                </Text>
                {this.state.usersChoice.map((item,index) =>
                    <GCheckBoxComponent 
                    onPress={()=>this.checkBoxClicked(index,item.checked)}
                    selected = {item.checked}
                    options = {item.options}/>
                )} 
                {/* <Button title={strings("common.back")} onPress={()=>Actions.pop()} />  */}

                
                <View style={{height:10}}>

                </View>                        
                    
            </HomeComponentWithSpinner>
            
            </ScrollView>
        );
    }
}

export default HomeComponent;