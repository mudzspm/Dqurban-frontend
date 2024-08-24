// countryActions.js
import { axiosInstance } from "../../utils";
import {
  GET_COUNTRIES_REQUEST,
  GET_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL
} from "../constants/countryTypes";

export const getCountries = () => async (dispatch) => {
  try {
    dispatch({ type: GET_COUNTRIES_REQUEST });

    const response = await axiosInstance.get("api/users/get/countries");

    dispatch({
      type: GET_COUNTRIES_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_COUNTRIES_FAIL,
      payload: error.message,
    });
    console.error(error);
  }
};
