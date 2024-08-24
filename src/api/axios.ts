import axios, { AxiosError } from "axios";

export const api = axios.create({
    // baseURL: "http://52.77.157.79:3000/api",
    baseURL: "https://api.dqurban.com/api",
    // baseURL: "http://54.152.43.82:3000/api",
    // baseURL: "http://3.87.185.133:3000/api",
})

const errorHandler = (error: AxiosError) => {
    const statusCode = error.response?.status

    // logging only errors that are not 401
    if (statusCode && statusCode !== 401) {
        console.error(error)
    }

    return Promise.reject(error)
}

api.interceptors.response.use(undefined, (error) => {
    return errorHandler(error)
})