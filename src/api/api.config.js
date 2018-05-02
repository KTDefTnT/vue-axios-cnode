import axios from 'axios';

axios.interceptors.request.use(config => {
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['Content-Type'] = 'application/json';
  return config;
});

axios.interceptors.response.use(response => {
  console.log(response);
  return response;
});
