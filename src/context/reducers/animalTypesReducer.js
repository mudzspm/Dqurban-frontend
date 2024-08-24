import {
  GET_ANIMAL_TYPES_REQUEST,
  GET_ANIMAL_TYPES_SUCCESS,
  GET_ANIMAL_TYPES_FAIL,
} from '../constants/animalTypesTypes';

const initialState = {
  animalTypes: [],
  loading: false,
  error: null,
};

const animalTypesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIMAL_TYPES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ANIMAL_TYPES_SUCCESS:
      return {
        ...state,
        loading: false,
        animalTypes: action.payload,
        error: null,
      };
    case GET_ANIMAL_TYPES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default animalTypesReducer;
