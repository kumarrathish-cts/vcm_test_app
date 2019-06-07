import React, { Component } from 'react';
import { Provider } from "react-redux";

import Routes from './routes';
import configureStore from "./store/configureStore";

/*
Create application store and its inital value when app launch
*/
const initialState = {
    appVersion: "1.0.0",
    env: "PROD",
    wsVersion: "",
    NotifitcationWsVersion: "",
    appBuildKey: "",
    appID: "",
    language: "en"
  };
const store = configureStore({ initialState });

class RootComponent extends Component {
    render() {
        return(
            <Provider store={store}>
              <Routes />
            </Provider>
          );
    }
}

export default RootComponent;