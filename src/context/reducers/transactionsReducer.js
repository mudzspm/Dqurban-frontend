// transactionsreducer.js
import {
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_FAIL
} from "../constants/transactionsTypes.js";

const initialState = {
  transactionsList: [],
  loading: true,
  error: null,
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        transactionsList: action.payload,
        error: null,
      };

    case GET_TRANSACTIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default transactionsReducer;
