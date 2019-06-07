import React, { Component } from 'react';
import { View, Text,Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { styles } from './styles';

import  { GLoadingSpinnerHOC } from '../../GHOC';
import { GButtonComponent, GBiometricAuthentication} from '../../commonComponents';

const LoginComponentWithSpinner = GLoadingSpinnerHOC(View);

import { strings } from '../../locales/Lang';

class LoginComponent extends Component {
    constructor(props){
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            isLoading:false,
            enableBiometric:false
        };
    }
    /*
    The below method is called when update component.
    This method is called after render() is called
    and  before the DOM visible to the user. When this method called all 
    the DOM elements are created and accessible. 
    */
    getSnapshotBeforeUpdate(prevProps, prevState){

        return null; //should return null by default.
    }
    /*
    This function receive the value returned from getSnapshotBeforeUpdate()
    based on the value received, can manipulate DOM
    */
    componentDidUpdate(prevProps, prevState, snapshot){

    }
    shouldComponentUpdate(nextProps, nextState){
        return true; //should return true by default
    }
    /*
    This method is called when mount component and update component.
    This is where we should initialized component state variables and return the same
    */
    static getDerivedStateFromProps(props, state){
        //initialize state variable and return. If no changes required for state
        //variable then return empty object. return {}

        return {}; //should return empty object by default

    }
    
    componentDidMount(){
        // throw new Error('Unable Render Login Component');
    //Below code added for testing purpose to show how the loading spinner working
        // setInterval(()=>{
        //     this.setState({isLoading:!this.state.isLoading});
        // },2000)
    }
    componentWillUnmount(){

    }
    onAuthenticate = result=> {
        console.log(result);
        this.setState({isLoading:result,enableBiometric:false});
    }
    render(){
        return (
            <>
            {this.state.enableBiometric && 
                <GBiometricAuthentication onAuthenticate={this.onAuthenticate} enableBiometric={this.state.enableBiometric}/>
            }
            <LoginComponentWithSpinner isLoading={this.state.isLoading} style={styles.containerStyle}>            
                <Text style={styles.loginText}>{strings("login.welcomText")}</Text>
                <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= {strings("common.next")}
                    onPress={()=>Actions.drawerMenu()}
                    />
                <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= {strings("common.biometric")}
                    onPress={()=>{this.setState({enableBiometric:true});}}
                    />
            </LoginComponentWithSpinner>
         {/* </GBiometricAuthentication> */}
        </>
        );
    }
}

export default LoginComponent;