import {
    ADD_PARTICIPANTS_REQUEST,
    ADD_PARTICIPANTS_SUCCESS,
    ADD_PARTICIPANTS_FAIL,
    ADD_EMPTY_PARTICIPANTS 
  } from '../constants/participantTypes';
  
  const initialState = {
    participants: [],
    loading: false,
    error: null
  };
  
  const participantReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_PARTICIPANTS_REQUEST:
        return {
          ...state,
          loading: true
        };
      case ADD_PARTICIPANTS_SUCCESS:
        return {
          ...state,
          loading: false,
          participants: action.payload,
          error: null
        };
      case ADD_PARTICIPANTS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
        case ADD_EMPTY_PARTICIPANTS:
            return {
              ...state,
              participants: action.payload
            };
      default:
        return state;
    }
  };
  
  export default participantReducer;
  