// regionReducer.js
import {
    GET_REGIONS_REQUEST,
    GET_REGIONS_SUCCESS,
    GET_REGIONS_FAIL,
    CLEAR_REGIONS
  } from "../constants/regionTypes";
  
  const initialState = {
    regions: [],
    loading: true,
    error: null,
  };
  
  const regionReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_REGIONS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_REGIONS_SUCCESS:
        return {
          ...state,
          loading: false,
          regions: action.payload,
          error: null,
        };
      case GET_REGIONS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case CLEAR_REGIONS:
            return {
              ...state,
              regions: [], // Set regions to empty array
            };
      default:
        return state;
    }
  };
  
  export default regionReducer;
  