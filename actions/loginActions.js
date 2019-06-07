import { Actions, ActionConst } from "react-native-router-flux";
import * as ActionTypes from "../constants/actionConstants";

//This function will return a fuction which will be call Asynchronously and dispatch the given action.
export const login = (data /* , Callback */) => (dispatch, getState) => {
    
    //Get access to app initial state from Redux store 
    const { env } = getState().initialState;
  
    //Make WS calls and handle response.

    //Dispatch Action which will be handled by Redux Reducer and push data to App store.
    const response = {
        data:'JSON data received from WS or custom data needs to be stored'
    };

    dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        data: response
    });
  };
  