// transactionsreducer.js
import {
    QURBAN_DATE_REQUEST,
    QURBAN_DATE_SUCCESS,
    QURBAN_DATE_FAIL
  } from "../constants/qurbanCalandarTypes.js";
  
  const initialState = {
    qurbandate: [],
    loading: true,
    error: null,
  };
  
  const qurbanCalandarReducer = (state = initialState, action) => {
    switch (action.type) {
      case QURBAN_DATE_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case QURBAN_DATE_SUCCESS:
        return {
          ...state,
          loading: false,
          qurbandate: action.payload,
          error: null,
        };
  
      case QURBAN_DATE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default qurbanCalandarReducer;
  