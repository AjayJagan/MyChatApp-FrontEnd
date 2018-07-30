import axios from 'axios';

const domain = window.location.hostname;
const baseURL = `http://localhost:3000/`;

const instance = axios.create({
    baseURL,
  });

  instance.interceptors.request.use((config) => {
    const state = require('./store').default.getState();
    if (state.user.isAuthenticated) {
      config.headers['authorization'] = state.user.user.token;
    }
    return config;
  }, (err) => {
    return Promise.reject(err);
  });

  instance.interceptors.response.use((response) => {
    return response;
  }, (err) => {
    if (err.response.status === 403) {
      require('./store').default.dispatch(logout());
    }
    return Promise.reject(err);
  });

  export default instance;