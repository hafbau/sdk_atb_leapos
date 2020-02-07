const axios = require('./axios');
const resource_docs = require('./docsData.js').docs.rawData.resource_docs;

const sdkFunks = generateFnsFromDocs(resource_docs, axios);
sdkFunks.login = makeLoginFn(axios);

module.exports = sdkFunks;