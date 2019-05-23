import axios from 'axios';

const api = axios.create({
  baseURL: process.env.URL || 'http://localhost:3000',
});

export default api;
