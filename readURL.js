
const paths = require('./pathsFind.js');
const index = require('./index.js');
const fetch = require('node-fetch');
const testFetch = require('./testFetch.js');


const readLinkURL = (data) => {

  const regexLink = /(https?:\/\/[^\)\s ]+)/g;
  const regexMatch = data.match(regexLink);
  testFetch.statusDate(regexMatch);
  console.log('match',regexMatch);

};

module.exports.readLinkURL = readLinkURL;


