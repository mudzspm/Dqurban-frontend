import {
    ADD_PARTICIPANTS_REQUEST,
    ADD_PARTICIPANTS_SUCCESS,
    ADD_PARTICIPANTS_FAIL,
    ADD_EMPTY_PARTICIPANTS
  } from '../constants/participantTypes';
  
  export const addParticipants = (participants) => (dispatch) => {
    try {
      dispatch({ type: ADD_PARTICIPANTS_REQUEST });
      // Dispatch the action with the participants array
      dispatch({
        type: ADD_PARTICIPANTS_SUCCESS,
        payload: participants
      });
    } catch (error) {
      dispatch({
        type: ADD_PARTICIPANTS_FAIL,
        payload: error.message
      });
      console.error(error);
    }
  };
  
  

export const addEmptyParticipants = () => ({
  type: ADD_EMPTY_PARTICIPANTS,
  payload: []
});
