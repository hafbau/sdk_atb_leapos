const fs = require('fs');
const resource_docs = require('./docsData.js').docs.rawData.resource_docs;

const list = resource_docs.reduce((mlist, doc) => {
  mlist[doc.implemented_by.function] = {
    method: doc.request_verb,
    url: doc.request_url
  };
  return mlist;
}, {})

fs.writeFile('methodList.json', JSON.stringify(list, null, 2), (err) => {
  console.log('err :', err);
})