const axios = require('axios');
const qs = require('querystring');
const resource_docs = require('./docsData.js').docs.rawData.resource_docs;

axios.defaults.baseURL = process.env.BASE_URL || 'https://api.leapos.ca';
axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
})

const sdkFunks = resource_docs.reduce((sdk, doc) => {
    sdk[doc.implemented_by.function] = ({ params, body, filter }) => {
        const url = `${doc.request_url}?${qs.stringify(filter)}`;
        return axios({
            method: doc.request_verb,
            url: putParamsInUrl(url, params),
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    return sdk;
}, {});
