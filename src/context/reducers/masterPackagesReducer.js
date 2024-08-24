import {
  GET_MASTER_PACKAGES_REQUEST,
  GET_MASTER_PACKAGES_SUCCESS,
  GET_MASTER_PACKAGES_FAIL,
} from '../constants/masterPackagesTypes';

const initialState = {
  masterPackages: [],
  loading: false,
  error: null,
};

const masterPackagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MASTER_PACKAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_MASTER_PACKAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        masterPackages: action.payload,
        error: null,
      };
    case GET_MASTER_PACKAGES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default masterPackagesReducer;
