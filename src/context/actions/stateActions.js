// stateActions.js
import { axiosInstance } from "../../utils";
import {
  GET_STATES_REQUEST,
  GET_STATES_SUCCESS,
  GET_STATES_FAIL
} from "../constants/stateTypes";

export const getStates = (countryId) => async (dispatch) => {
  try {
    dispatch({ type: GET_STATES_REQUEST });

    const response = await axiosInstance.get(`api/users/get/${countryId}/states`);
debugger
    dispatch({
      type: GET_STATES_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_STATES_FAIL,
      payload: error.message,
    });
    console.error(error);
  }
};
