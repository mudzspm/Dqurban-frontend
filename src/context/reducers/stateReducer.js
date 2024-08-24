// stateReducer.js
import {
    GET_STATES_REQUEST,
    GET_STATES_SUCCESS,
    GET_STATES_FAIL
  } from "../constants/stateTypes";
  
  const initialState = {
    states: [],
    loading: true,
    error: null,
  };
  
  const stateReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_STATES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_STATES_SUCCESS:
        return {
          ...state,
          loading: false,
          states: action.payload,
          error: null,
        };
      case GET_STATES_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
       
      default:
        return state;
    }
  };
  
  export default stateReducer;
  