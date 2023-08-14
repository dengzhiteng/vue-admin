import axios from "axios"

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 6000

})

instance.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default instance
