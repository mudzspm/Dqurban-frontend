// orderactions.js

import { axiosInstance } from "../../utils";
import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL
} from "../constants/userActionTypes";

export const updateProfile = (userData, token) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const formData = new FormData();
    formData.append('fullname', userData.fullname);
    formData.append('ic_number', userData.ic_number);
    formData.append('address', userData.address);
    formData.append('country_id', userData.country_id);
    formData.append('state_id', userData.state_id);
    formData.append('region_id', userData.region_id);
    formData.append('bank_name', userData.bank_name);
    formData.append('account_no', userData.account_no);
    formData.append('image', userData.image);
    userData.familyMembers.forEach((member, index) => {
      if (member.id) {
        formData.append(`familyMembers[${index}][id]`, member.id);
      }
      // formData.append(`familyMembers[${index}][id]`, member.id);
      formData.append(`familyMembers[${index}][fullname]`, member.fullname);
      formData.append(`familyMembers[${index}][ic_number]`, member.ic_number);
    });

    // Append file if it exists
    // if (file) {
    //   formData.append('image', file[0]);
    // }
    const config = {
      headers: {
        'Authorization': `Bearer ${token.token}`,
        'Content-Type': 'multipart/form-data',
      }
    };
debugger;
    const response = await axiosInstance.put(
      '/api/users/update/profile',
      formData,
      config
    );
console.log(response.data);
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: response.data // Assuming the response data contains the updated profile
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error,
    });
    console.error(error);
  }
};
