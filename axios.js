const axios = require('axios');

axios.defaults.baseURL = process.env.BASE_URL || 'https://api.leapos.ca';
axios.interceptors.response.use(function (response) {
  // returns just data
  return response.data;
}, function (error) {
  return Promise.reject(error);
})

module.exports = axios;