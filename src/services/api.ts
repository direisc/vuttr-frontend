import axios from 'axios';
const URL = process.env.VUE_APP_API || 'http://localhost:3000'; 
const api = axios.create({
  baseURL: URL,
});

export default api;
