import axios from 'axios';

export const api = axios.create({
  // common axios configurations
  timeout: 10000,
});

api.interceptors.request.use(
  (config) => {
    // Add common headers or modify config
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors
    return Promise.reject(error);
  }
);
