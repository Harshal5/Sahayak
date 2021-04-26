import axios from 'axios';

const baseUrl = 'http://192.168.1.8:5000/api';

const API = axios.create({
  baseURL: baseUrl,
});

export default API;
