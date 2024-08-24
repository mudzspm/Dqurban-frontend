// transactionbyIdactions.js
import { axiosInstance } from "../../utils";
import {
  GET_TRANSACTIONS_BY_ID_REQUEST,
  GET_TRANSACTIONS_BY_ID_SUCCESS,
  GET_TRANSACTIONS_BY_ID_FAIL,
} from "../constants/transactionsByIdTypes";


export const gettransactionsById = (transactionsId,token) => async (dispatch) => {
 
  try {
    dispatch({
      type: GET_TRANSACTIONS_BY_ID_REQUEST,
    });
    const response = await axiosInstance.get(
      `api/animal-inventory/get-transactions/${transactionsId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
console.log(response.data.data);
    dispatch({
      type: GET_TRANSACTIONS_BY_ID_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TRANSACTIONS_BY_ID_FAIL,
      payload: error.message,
    });
    console.error(error);
  }
};
