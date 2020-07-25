import axios from 'axios'

export const authRequest = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {'Authorization': `Token ${localStorage.getItem('token')}`}
  });