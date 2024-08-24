// orderreducer.js
import {
    INSTALLATION_PAYNOW_REQUEST,
    INSTALLATION_PAYNOW_SUCCESS,
    INSTALLATION_PAYNOW_FAIL
  } from "../constants/installationPaynowTypes";
  
  const initialState = {
    paynow: [],
    loading: true,
    error: null,
  };
  
  const installationPaynowReducer = (state = initialState, action) => {
    switch (action.type) {
      case INSTALLATION_PAYNOW_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case INSTALLATION_PAYNOW_SUCCESS:
        return {
          ...state,
          loading: false,
          paynow: action.payload,
          error: null,
        };
  
      case INSTALLATION_PAYNOW_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default installationPaynowReducer;
  