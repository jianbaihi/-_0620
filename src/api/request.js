import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000,
})

// 设置拦截器
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
