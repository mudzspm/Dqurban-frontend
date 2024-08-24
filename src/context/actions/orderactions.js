// orderactions.js
import { axiosInstance } from "../../utils";
import {
  GET_ANIMAL_INVENTORY_REQUEST,
  GET_ANIMAL_INVENTORY_SUCCESS,
  GET_ANIMAL_INVENTORY_FAIL,
} from "../constants/ordertypes.js";


export const getAnimalInventory = (orderType, token, installmentOption = false) => async (dispatch) => {
 
  try {
    dispatch({
      type: GET_ANIMAL_INVENTORY_REQUEST,
    });
    debugger;
    const url = installmentOption
    ? `api/animal-inventory/get-orders?installment_option=${installmentOption}`
    : `api/animal-inventory/get-orders?order_type=${orderType}&installment_option=${installmentOption}`;

    const response = await axiosInstance.get(url,
      {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      }
    );
console.log(response.data);
    dispatch({
      type: GET_ANIMAL_INVENTORY_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ANIMAL_INVENTORY_FAIL,
      payload: error.message,
    });
    console.error(error);
  }
};
