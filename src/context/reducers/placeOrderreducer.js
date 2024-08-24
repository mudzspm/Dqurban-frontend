// orderreducer.js
import {
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAIL
  } from "../constants/placeOrdertypes.js";
  
  const initialState = {
    orderData: [],
    loading: true,
    error: null,
  };
  
  const placeOrderReducer = (state = initialState, action) => {
    switch (action.type) {
      case PLACE_ORDER_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case PLACE_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          orderData: action.payload,
          error: null,
        };
  
      case PLACE_ORDER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default placeOrderReducer;
  