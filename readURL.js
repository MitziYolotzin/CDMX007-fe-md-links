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

const readLinkURLData = (data) => {

  const regexLink = /(https?:\/\/[^\)\s ]+)/g;
  const regexMatch = data.match(regexLink);
  //statusLinks.statusDate(regexMatch);
  console.log(regexMatch);

};

//Ejemplo reduce
// computeStats: (data,valueItem) => {
//   let arrayCandys = [];
//   let result = {};
//   data.forEach(element => {
//     if(element[valueItem] > 0){
//       arrayCandys.push(element[valueItem])
//     }
//   });
// //Show minimum, maximum and average of certain parameters
//   const sum = arrayCandys.reduce((prev, next) => prev + next);
//   const averageComplete = sum / arrayCandys.length;

module.exports = {readLinkURL, readLinkURLData};
