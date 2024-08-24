// waqfActions.js
import { axiosInstance } from "../../utils";
import {
  GET_WAQF_REQUEST,
  GET_WAQF_SUCCESS,
  GET_WAQF_FAIL
} from "../constants/waqfTypes";

export const getWaqf = (pageNumber = 1, pageSize = 10, queryParams = {}) => async (dispatch) => {
  try {
    dispatch({
      type: GET_WAQF_REQUEST,
    });
    const response = await axiosInstance.get(`api/packages/package-details/?pageNumber=${pageNumber}&pageSize=${pageSize}`, {
      params: queryParams
    });
    dispatch({
      type: GET_WAQF_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_WAQF_FAIL,
      payload: error.message,
    });
    console.error(error);
  }
};
