import React, { Component } from 'react';
import {
    Router,
    Scene,
    Stack,
    Drawer,
    Modal,
    ActionConst,
    Actions
  } from "react-native-router-flux";

import { BackHandler } from 'react-native';

import Login from '../app/screens/login';
import Home from '../app/screens/home';
import Detail from '../app/screens/details';
import List from '../app/screens/listView';
import Pdf from '../app/screens/pdfGen';
import Chart from '../app/screens/charts';

import { GSideMenu } from './commonComponents';
// import { convertToDeviceResolution } from './utils/resolution'

// const menuWidth = convertToDeviceResolution(95)

export default class Routes extends Component {
    constructor(props){
        super(props);
        // this.menuWidth="95%"//convertToDeviceResolution(95)
    }
    
    componentDidMount() {
        //Handle Android Hardware Back button. Here handled login and Home to exitApp
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            console.log(Actions.currentScene);
            if(Actions.currentScene =='_home' || Actions.currentScene =='login' ) {
                //The below line works only on Android devices.
                BackHandler.exitApp();
                return true;
            }
            return false;
        });
      }
    
      componentWillUnmount() {
        this.backHandler.remove();
      }
    render() {
        return(
            <Router>
                    <Stack key="root">
                        <Scene 
                        key="login" 
                        component={Login} 
                        title="Login"
                        type={ActionConst.RESET}
                        />
                        <Drawer 
                            hideNavBar
                            key="drawerMenu"
                            contentComponent={GSideMenu}
                            drawerPosition="left"
                            drawerLockMode={'locked-closed'}                            
                        >
                            <Scene 
                            key="home" 
                            component={Home}
                            title="Home"
                            />
                        </Drawer>
                        <Scene
                        key='detail'
                        title="Detail"
                        component={Detail}
                        backTitle={'Home'}
                        />

                        <Scene
                        key='List'
                        title="Flat List"
                        component={List}
                        />

                        <Scene
                            key='Pdf'
                            title="PDF"
                            component={Pdf}
                        />  
                        
                        <Scene
                            key='Chart'
                            title="Chart"
                            component={Chart}
                        />
                        
                    </Stack>
            </Router>
        );
    }
}