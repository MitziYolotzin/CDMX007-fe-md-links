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

const readLinkStats = (data) => {

  const regexLink = /(https?:\/\/[^\)\s ]+)/g;
  const regexMatch = data.match(regexLink);
  //statusLinks.statusDate(regexMatch);
  const uniques = new Set(regexMatch);

  console.log('Total Links:' + regexMatch.length );
  console.log('Uniques:' + ([...uniques].length) );
};

// let arr = [1,2,3,3,4,5,5,5,5,5];

// let unicos = new Set(arr);

// console.log("Unicos: ", [...unicos]);

//const sumLinks = regexMatch.reduce((prev, next) => prev + next);
//console.log(sumLinks);

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

module.exports = {readLinkURL, readLinkURLData, readLinkStats};

//Ejemplo reduce
// const linkStats = (regexMatch,data,valueItem) => {
//   let linksTotal = [];
//   let result = {};
//   regexMatch.forEach(element => {
//     if(element[valueItem] > 0){
//       linksTotal.push(element[valueItem])
//     }
//   });
// 
//   const sum = linksTotal.reduce((prev, next) => prev + next);
//   const averageComplete = sum / arrayCandys.length;

