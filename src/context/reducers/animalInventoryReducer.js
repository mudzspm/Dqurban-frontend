import {
  GET_ANIMAL_INVENTORY_REQUEST,
  GET_ANIMAL_INVENTORY_SUCCESS,
  GET_ANIMAL_INVENTORY_FAIL
} from "../constants/animalInventoryTypes";

const initialState = {
  animalInventory: [],
  loading: true,
  error: null,
};

const animalInventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ANIMAL_INVENTORY_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case GET_ANIMAL_INVENTORY_SUCCESS: {
      return {
        ...state,
        loading: false,
        animalInventory: action.payload,
        error: null,
      };
    }

    case GET_ANIMAL_INVENTORY_FAIL: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

export default animalInventoryReducer;
