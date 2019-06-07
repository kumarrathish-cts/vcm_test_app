/* **************************\
Component: Initial state Reducers
Explanation:
Default state will be used by the reducer
if not available in the store state.
============================
\*************************** */
const DEFAULT_STATE = { initialState: false };

export default (state = DEFAULT_STATE, action) => {
  let envVariable = "";
  switch (action.type) {
    case 'SET_ENV':
      if (action.data.toLowerCase().endsWith("@lhc.uat")) {
        envVariable = "UAT";
      } else if (action.data.toLowerCase().endsWith("@lhc.demo")) {
        envVariable = "DEMO";
      } else if (action.data.toLowerCase().endsWith("@lhc.rn")) {
        envVariable = "RN";
      } else {
        envVariable = "PROD";
      }
      return {
        ...state,
        env: envVariable
      };
    case 'SET_LANG':
      return {
        ...state,
        language: action.data
      };
    default:
      return state;
  }
};
