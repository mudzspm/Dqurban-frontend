// transactionsactions.js
import { axiosInstance } from "../../utils";
import {
    QURBAN_DATE_REQUEST,
    QURBAN_DATE_SUCCESS,
    QURBAN_DATE_FAIL,
} from "../constants/qurbanCalandarTypes";



export const qurbanCalandarActions = () => async (dispatch) => {
 
  try {
    dispatch({
      type: QURBAN_DATE_REQUEST,
    });
    debugger;
    const response = await axiosInstance.get(
      `api/packages/calendar-event
`,
    );
console.log(response.data.data);
    dispatch({
      type: QURBAN_DATE_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: QURBAN_DATE_FAIL,
      payload: error.message,
    });
    console.error(error);
  }
};
