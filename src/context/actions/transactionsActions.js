// transactionsactions.js
import { axiosInstance } from "../../utils";
import {
  GET_TRANSACTIONS_REQUEST,
  GET_TRANSACTIONS_SUCCESS,
  GET_TRANSACTIONS_FAIL,
} from "../constants/transactionsTypes.js";



export const gettransactions = (token) => async (dispatch) => {
 
  try {
    dispatch({
      type: GET_TRANSACTIONS_REQUEST,
    });
    const response = await axiosInstance.get(
      `api/animal-inventory/get-transactions`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
console.log(response.data.data);
    dispatch({
      type: GET_TRANSACTIONS_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TRANSACTIONS_FAIL,
      payload: error.message,
    });
    console.error(error);
  }
};
