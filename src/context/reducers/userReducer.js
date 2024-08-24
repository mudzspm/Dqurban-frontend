// userReducer.js
import {
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL
  } from '../constants/userActionTypes';
  
  const initialState = {
    loading: false,
    success: false,
    error: null
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_PROFILE_REQUEST:
        return {
          ...state,
          loading: true,
          success: false,
          error: null
        };
      case UPDATE_PROFILE_SUCCESS:
        return {
          ...state,
          loading: false,
          success: true,
          error: null
        };
      case UPDATE_PROFILE_FAIL:
        return {
          ...state,
          loading: false,
          success: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  