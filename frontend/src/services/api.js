import axios from 'axios'

export const urlApi = 'http://localhost:5000'

export const api = axios.create({
  baseURL: urlApi
})