import * as ActionTypes from "../constants/actionConstants";
/* **************************\
Component: Login Reducers
Explanation:
Default state will be used by the reducer
if not available in the store state.
\*************************** */
const DEFAULT_STATE = { login: false };

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        login: action.data
      };
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};
