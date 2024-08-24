// orderreducer.js
import {
    GET_ANIMAL_INVENTORY_REQUEST,
    GET_ANIMAL_INVENTORY_SUCCESS,
    GET_ANIMAL_INVENTORY_FAIL
  } from "../constants/ordertypes.js";
  
  const initialState = {
    OrdersList: [],
    loading: true,
    error: null,
  };
  
  const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ANIMAL_INVENTORY_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case GET_ANIMAL_INVENTORY_SUCCESS:
        return {
          ...state,
          loading: false,
          OrdersList: action.payload,
          error: null,
        };
  
      case GET_ANIMAL_INVENTORY_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default orderReducer;
  