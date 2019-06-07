import { combineReducers } from "redux";
import initialState from "./initialStateReducer";
import login from './loginReducer';


export default appReducers = combineReducers({
    initialState,
    login
});


export const getLogin = ({ login }) => login;