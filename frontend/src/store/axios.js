import axios from 'axios';

const instance = axios.create({
  baseURL: '/api,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});

export default instance;
