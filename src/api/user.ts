import { api } from "./axios"

export const UsersAPI = {
  getUser: async () => {
    const authToken = localStorage.getItem('authToken')
    const response = await api.request({
      url: "/users/get/profile",
      method: "GET",
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })

    return response;
  }
}