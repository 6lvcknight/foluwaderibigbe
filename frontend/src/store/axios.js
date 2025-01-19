import axios from 'axios';
import { BASE_URL } from './constants';

const APIinstance = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});

export default APIinstance;