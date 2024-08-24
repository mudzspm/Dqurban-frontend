// // signUpReducer.js

import {
    SIGNUP_ORDER_REQUEST,
    SIGNUP_ORDER_SUCCESS,
    SIGNUP_ORDER_FAIL,
    SIGNUP_ORDER_RESET
    // @ts-ignore
  } from "../constants/signUpTypes.js";
  
  const initialState = {
    signUpData: null,
    loading: true,
    error: null,
  };
  
  const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
      case SIGNUP_ORDER_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case SIGNUP_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          signUpData: action.payload,
          error: null,
        };
  
      case SIGNUP_ORDER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case SIGNUP_ORDER_RESET:
          return {
              ...state,
              signUpData: null, // Reset signUpData to null
              error: null,
          };

      default:
        return state;
    }
  };
  
  export default signUpReducer;
  