
import { axiosInstance } from "../../utils";
import {
  GET_Feedlot_List_REQUEST,
  GET_Feedlot_List_SUCCESS,
  GET_Feedlot_List_FAIL
} from "../constants/feedlotListTypes";

export const getFeedlotList = (pageNumber = 1, pageSize = 10, queryParams = {}) => async (dispatch) => {
 
  try {
    dispatch({
      type: GET_Feedlot_List_REQUEST,
    });

    const convertedParams = {};
    if (queryParams.country) convertedParams.country_id = Number(queryParams.country);
    if (queryParams.state) convertedParams.state_id = Number(queryParams.state);
    if (queryParams.region) convertedParams.region_id = Number(queryParams.region);

    const queryString = Object.keys(convertedParams).map(key => `${key}=${convertedParams[key]}`).join('&');
    const url = `api/users/role/feedlot?${queryString}&pageNumber=${pageNumber}&pageSize=${pageSize}`;

    const response = await axiosInstance.get(url);

    dispatch({
      type: GET_Feedlot_List_SUCCESS,
      payload: response.data.data,
    });
  }  catch (error) {
      dispatch({
        type: GET_Feedlot_List_FAIL,
        payload: error.message,
      });
      console.error(error);
    }
  };
