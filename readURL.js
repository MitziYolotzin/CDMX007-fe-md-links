const paths = require('./pathsFind.js');
const index = require('./index.js');
const fetch = require('node-fetch');
const colors = require('colors');
const statusLinks = require('./statusLinks.js');


//Function for match links with regular expression in all file review and show status
const readLinkURL = (data) => {

  const regexLink = /(https?:\/\/[^\)\s ]+)/g;
  const regexMatch = data.match(regexLink);
  statusLinks.statusDate(regexMatch);
  console.log(regexMatch);

};

//Function for match links with regular expression in all file review, show list links
const readLinkURLData = (data) => {

  const regexLink = /\[(.*?)\]\s?\((.*?)\)/g;
  const regexMatch = data.match(regexLink);
  console.log(regexMatch);

};

//Function for match links with regular expression in all file review, show total links and uniques links
const readLinkStats = (data) => {

  const regexLink = /(https?:\/\/[^\)\s ]+)/g;
  const regexMatch = data.match(regexLink);
  const uniques = new Set(regexMatch);

  console.log('Total Links: '.green + regexMatch.length );
  console.log('Unique: '.magenta + ([...uniques].length) );
  //mdstatusLinks.linksStatusFail(regexMatch);

};

//Function for match links with regular expression in all file review, show total links and uniques links
const readLinkStatsBroken = (data) => {

  const regexLink = /(https?:\/\/[^\)\s ]+)/g;
  const regexMatch = data.match(regexLink);
  const uniques = new Set(regexMatch);

  console.log('Total Links: '.green + regexMatch.length );
  console.log('Unique: '.magenta + ([...uniques].length) );
  statusLinks.linksStatusFail(regexMatch);

};


module.exports = {readLinkURL, readLinkURLData, readLinkStats, readLinkStatsBroken};



