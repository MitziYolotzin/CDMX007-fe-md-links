const paths = require('./pathsFind.js');
const index = require('./index.js');
const fetch = require('node-fetch');
const statusLinks = require('./statusLinks.js');


const readLinkURL = (data) => {

  const regexLink = /(https?:\/\/[^\)\s ]+)/g;
  const regexMatch = data.match(regexLink);
  statusLinks.statusDate(regexMatch);
  console.log(regexMatch);

};

module.exports.readLinkURL = readLinkURL;
