import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import AppRootReducer from "../reducers";

export default function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(thunk));
  return createStore(AppRootReducer, initialState, enhancer);
}