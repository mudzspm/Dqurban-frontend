
import axios from 'axios';
import {
  GET_ANIMAL_TYPES_REQUEST,
  GET_ANIMAL_TYPES_SUCCESS,
  GET_ANIMAL_TYPES_FAIL,
} from '../constants/animalTypesTypes';
import { SERVER_URL } from "../../constant/ServerUrl";


export const getAnimalTypes = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ANIMAL_TYPES_REQUEST });

    // const response = await axios.get('http://52.77.157.79:3000/api/packages/animal-types');
    const response = await axios.get(`${SERVER_URL}api/packages/animal-types`);

    dispatch({
      type: GET_ANIMAL_TYPES_SUCCESS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ANIMAL_TYPES_FAIL,
      payload: error.message,
    });
    console.error(error);
  }
};
