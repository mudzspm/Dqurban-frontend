import axios from "axios";

export type signupDto = {
    fullname: string,
    email: string,
    phone_no: string,
    ic_number: string,
    password: string
}
export type signupemp = {
    fullname: string;
    email: string;
    phone_no: string;
    ic_number: string;
    password: string;
    confirmPassword: string;
    country_id: string;
    state_id: string;
    region_id: string;
}
export type loginDto = {
    email: string,
    password: string
}

export const getCountries = async () => {
    const response = await axios.get('/user/get/countries');
    return response.data;
  };
  
  export const getStates = async (countryId: string) => {
    const response = await axios.get(`/user/get/state?country_id=${countryId}`);
    return response.data;
  };
  
  export const getRegions = async (stateId: string) => {
    const response = await axios.get(`/user/get/region?state_id=${stateId}`);
    return response.data;
  };