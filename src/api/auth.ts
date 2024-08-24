import axios from "axios"
import { api } from "./axios"
import { loginDto, signupDto,signupemp } from "./dtos/auth"

export const AuthAPI = {
  signup: async function (payload: signupDto) {
    const response = await api.request({
      url: "/auth/signup",
      method: "POST",
      data: payload
    })
    return response.data
  },
  login: async function (payload: loginDto) {
    const response = await api.request({
      url: "/auth/login",
      method: "POST",
      data: payload
    })
    return response
  },

  signupEmployees: async function (payload: signupemp) {
    const response = await api.request({
      url: "/auth/signup/seller",
      method: "POST",
      data: payload
    })
    return response.data
  },

  
}

export const getCountries = async () => {
  const response = await axios.get('/users/get/countries');
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