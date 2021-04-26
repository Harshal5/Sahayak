import axios from 'axios';

const baseUrl = 'http://192.168.43.70/api';

const API = axios.create({
  baseURL: baseUrl,
});

export default API;
