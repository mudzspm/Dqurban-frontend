// waqfReducer.js
import {
    GET_WAQF_REQUEST,
    GET_WAQF_SUCCESS,
    GET_WAQF_FAIL
  } from "../constants/waqfTypes";
  
  const initialState = {
    waqf: [],
    loading: true,
    error: null,
  };
  
  const waqfReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_WAQF_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
  
      case GET_WAQF_SUCCESS: {
        return {
          ...state,
          loading: false,
          waqf: action.payload,
          error: null,
        };
      }
  
      case GET_WAQF_FAIL: {
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      }
  
      default:
        return state;
    }
  };
  
  export default waqfReducer;
  