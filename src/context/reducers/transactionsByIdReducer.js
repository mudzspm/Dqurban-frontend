// transactionsByIdreducer.js
import {
  GET_TRANSACTIONS_BY_ID_REQUEST,
  GET_TRANSACTIONS_BY_ID_SUCCESS,
  GET_TRANSACTIONS_BY_ID_FAIL
  } from "../constants/transactionsByIdTypes";
  
  const initialState = {
    TransactionsDetail: [],
    loading: true,
    error: null,
  };
  
  const transactionsByIdReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_TRANSACTIONS_BY_ID_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case GET_TRANSACTIONS_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          TransactionsDetail: action.payload,
          error: null,
        };
  
      case GET_TRANSACTIONS_BY_ID_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default transactionsByIdReducer;
  