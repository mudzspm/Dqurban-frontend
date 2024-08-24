import {
    GET_Feedlot_List_REQUEST,
    GET_Feedlot_List_SUCCESS,
    GET_Feedlot_List_FAIL
  } from "../constants/feedlotListTypes";
  
  const initialState = {
    feedlotList: [],
    loading: true,
    error: null,
  };
  
  const feedlotReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_Feedlot_List_REQUEST: {
        return {
          ...state,
          loading: true,
        };
      }
  
      case GET_Feedlot_List_SUCCESS: {
        return {
          ...state,
          loading: false,
          feedlotList: action.payload,
          error: null,
        };
      }
  
      case GET_Feedlot_List_FAIL: {
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
  
  export default feedlotReducer;
  