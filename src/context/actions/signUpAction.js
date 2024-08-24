// signUpAction.js
import { axiosInstance } from "../../utils";
import {
    SIGNUP_ORDER_REQUEST,
    SIGNUP_ORDER_SUCCESS,
    SIGNUP_ORDER_FAIL,
    SIGNUP_ORDER_RESET
} from "../constants/signUpTypes.js";

export const signUpAction = (signUpData) => async (dispatch) => {
    debugger;
  try {
    dispatch({
      type: SIGNUP_ORDER_REQUEST,
    });
    debugger;
    const response = await axiosInstance.post(
      `api/auth/signup/seller`,
      signUpData,
     
    );

    console.log(response);

    dispatch({
      type: SIGNUP_ORDER_SUCCESS,
      payload: response.data.data,
    });

    setTimeout(() => {
      dispatch({ type: SIGNUP_ORDER_RESET });
  }, 3000);
  } catch (error) {
    dispatch({
        type: SIGNUP_ORDER_FAIL,
        payload: error.response.data.message || error.response.data.error,
      });
      setTimeout(() => {
        dispatch({ type: SIGNUP_ORDER_RESET });
    }, 3000);
  }
};
