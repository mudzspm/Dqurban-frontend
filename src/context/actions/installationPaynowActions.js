// orderactions.js

import { axiosInstance } from "../../utils";
import {
  INSTALLATION_PAYNOW_REQUEST,
  INSTALLATION_PAYNOW_SUCCESS,
  INSTALLATION_PAYNOW_FAIL,
} from "../constants/installationPaynowTypes.js";

export const paynowinstallment = (orderid, installmentid, full_payment, token) => async (dispatch) => {
  try {
    dispatch({
      type: INSTALLATION_PAYNOW_REQUEST,
    });
    debugger;
    let payload = {}
    if (installmentid == 0) {
      payload = {
        order_id: orderid,
        full_payment: true,
      };
    }
    else {
      payload = {
        order_id: orderid,
        full_payment: full_payment,
        installment_id: installmentid,
      };
    }
    const response = await axiosInstance.post(
      `api/animal-inventory/pay-now`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );


    dispatch({
      type: INSTALLATION_PAYNOW_SUCCESS,
      payload: response.data.data.checkout_url,
    });
  } catch (error) {
    dispatch({
      type: INSTALLATION_PAYNOW_FAIL,
      payload: error.message,
    });
    console.error(error);
  }
};
