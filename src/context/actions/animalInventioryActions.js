

import { axiosInstance } from "../../utils";
import {
  GET_ANIMAL_INVENTORY_REQUEST,
  GET_ANIMAL_INVENTORY_SUCCESS,
  GET_ANIMAL_INVENTORY_FAIL
} from "../constants/animalInventoryTypes";

export const getAnimalInventory = (pageNumber = 1, pageSize = 10, queryParams = {}) => async (dispatch) => {
    try {
      dispatch({
        type: GET_ANIMAL_INVENTORY_REQUEST,
      });
      // debugger;
      // const response = await axiosInstance.get(`api/animal-inventory/?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
      //   params: queryParams
      // });
      const response = await axiosInstance.get(`api/packages/package-details/?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
        params: queryParams
      });
      // debugger;
      console.log(response);
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
