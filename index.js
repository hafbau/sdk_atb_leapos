const axios = require('axios');
const qs = require('querystring');
const resource_docs = require('./docsData.js').docs.rawData.resource_docs;

axios.defaults.baseURL = process.env.BASE_URL || 'https://api.leapos.ca';
axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
})
