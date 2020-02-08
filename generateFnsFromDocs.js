const qs = require('querystring');

module.exports = (resource_docs, axios) => resource_docs.reduce((sdk, doc) => {
    sdk[doc.implemented_by.function] = ({ params, body, query, token } = {}) => {
        const url = `${doc.request_url}?${qs.stringify(query)}`;
        return axios({
            method: doc.request_verb,
            url: putParamsInUrl(url, params),
            data: body,
            headers: {
              'Content-Type': 'application/json'
              // TODO: ability to add explicit tokens
            }
        })
    }
    return sdk;
}, {});


// This algorithm feels somehow; splitting and then joining. Where is String#replace with regex and callback when you need them
const putParamsInUrl = (url, params = {}) => {
  if (!url.includes('_ID')) return url;
  return url.split('/')
    .map(urlPart => {
      if (urlPart.includes('_ID')) {
        const paramValue = params[urlPart] || params[urlPart.toLowerCase()];// case insensitivity
        if (!paramValue) throw new Error(`${urlPart} is required in params object.`)
        return paramValue;
      }
      return urlPart;
    })
    .join('/')
}