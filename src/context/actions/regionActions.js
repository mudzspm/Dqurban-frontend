// regionActions.js
import { axiosInstance } from "../../utils";
import {
  GET_REGIONS_REQUEST,
  GET_REGIONS_SUCCESS,
  GET_REGIONS_FAIL,
  CLEAR_REGIONS
} from "../constants/regionTypes";

export const getRegions = (stateId) => async (dispatch) => {
  try {
    dispatch({ type: GET_REGIONS_REQUEST });

    const response = await axiosInstance.get(`api/users/get/${stateId}/regions`);

    dispatch({
      type: GET_REGIONS_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_REGIONS_FAIL,
      payload: error.message,
    });
    console.error(error);
  }
};

export const clearRegions = () => ({
    type: CLEAR_REGIONS,
  });
  
