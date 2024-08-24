// countryReducer.js
import {
    GET_COUNTRIES_REQUEST,
    GET_COUNTRIES_SUCCESS,
    GET_COUNTRIES_FAIL
  } from "../constants/countryTypes";
  
  const initialState = {
    countries: [],
    loading: true,
    error: null,
  };
  
  const countryReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_COUNTRIES_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_COUNTRIES_SUCCESS:
        return {
          ...state,
          loading: false,
          countries: action.payload,
          error: null,
        };
      case GET_COUNTRIES_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default countryReducer;
  