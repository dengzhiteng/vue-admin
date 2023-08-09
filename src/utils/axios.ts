import axios, { Axios, AxiosResponse, AxiosRequestConfig } from "axios"

declare module "axios" {
  interface AxiosResponse<T = any> {
    result: null
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance
}

const httpInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 6000
})

httpInstance.interceptors.request.use(
  config => {
    return config
  },
  e => Promise.reject(e)
)

httpInstance.interceptors.response.use(
  res => res.data,
  e => {
    return Promise.reject(e)
  }
)

export default httpInstance
