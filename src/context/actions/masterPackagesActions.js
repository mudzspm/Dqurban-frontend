
import axios from 'axios';
import {
  GET_MASTER_PACKAGES_REQUEST,
  GET_MASTER_PACKAGES_SUCCESS,
  GET_MASTER_PACKAGES_FAIL,
} from '../constants/masterPackagesTypes.js';
import { SERVER_URL } from "../../constant/ServerUrl";


export const masterPackagesActions = () => async (dispatch) => {
  try {
    dispatch({ type: GET_MASTER_PACKAGES_REQUEST });
// debugger;
    // const response = await axios.get('http://52.77.157.79:3000/api/packages/animal-types');
    const response = await axios.get(`${SERVER_URL}api/packages`);

    dispatch({
      type: GET_MASTER_PACKAGES_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_MASTER_PACKAGES_FAIL,
      payload: error.message,
    });
    console.error(error);
  }
};
