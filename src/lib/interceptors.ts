import axios, { AxiosInstance } from 'axios'


const services: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_ENDPOINT,
  headers: { 'X-Custom-Header': 'foobar' }
})

export const get = (url: string, params?: unknown) => {
  return services.get(`${url}`, {
    params
  })
}

export const post = (url: string, body?: unknown) => {
  return services.post(`${url}`, body)
}

