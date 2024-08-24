// orderactions.js// ordertypes.js

// export const PLACE_ORDER_REQUEST = 'PLACE_ORDER_REQUEST';
// export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS';
// export const PLACE_ORDER_FAIL = 'PLACE_ORDER_FAIL';

import { axiosInstance } from "../../utils";
import {
  PLACE_ORDER_REQUEST,
  PLACE_ORDER_SUCCESS,
  PLACE_ORDER_FAIL,
} from "../constants/placeOrdertypes.js";

export const placeOrder = (orderData, token) => async (dispatch) => {
  try {
    dispatch({
      type: PLACE_ORDER_REQUEST,
    });

    const response = await axiosInstance.post(
      `/api/animal-inventory/place-order`,
      orderData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: PLACE_ORDER_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: PLACE_ORDER_FAIL,
      payload: error.message,
    });
    console.error(error);
  }
};
