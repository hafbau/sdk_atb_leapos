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

sdkFunks.login = ({ username, password, consumer_key } = {
   username: process.env.OPB_USERNAME, 
   password: process.env.OPB_PASSWORD, 
   consumer_key: process.env.OPB_CONSUMER_KEY
}) => {
    return axios({
        method: 'POST',
        url: '/my/logins/direct',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `DirectLogin username="${username}",password="${password}",consumer_key="${consumer_key}"`
        }
    })
    .then(({ token }) => {
        axios
        .defaults
        .headers
        .common['Authorization'] = `DirectLogin token="${token}"`
        return { token }
    })
}

// This algorithm feels somehow; splitting and then joining. Where is String#replace with regex and callback when you need them
const putParamsInUrl = (url, params = {}) => {
    if (!url.includes('_ID')) return url;
    return url.split('/')
        .map(urlPart => {
            if (urlPart.includes('_ID')) {
                const paramValue = params[urlPart];
                if(!paramValue) throw new Error(`${urlPart} is required in params object.`)
                return paramValue;
            }
            return urlPart;
        })
        .join('/')
}