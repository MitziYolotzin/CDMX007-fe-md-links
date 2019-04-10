const readURL = require('./readURL.js');
const paths = require('./pathsFind.js');
const fetch = require('node-fetch');
const colors = require('colors');
const path = require ('path');


const statusDate = (regexMatch) => {
  regexMatch.forEach(element => {
    const fileDates = path.parse(element);
    
    const fileName = fileDates.name;
    const fileBase = fileName.basename;
    
    fetch(element)
      .then(response => {
        const statusCheck = response.status;
        if (statusCheck == 200) {
          console.log(`${fileName}` + `${fileName}`.cyan + " " + `${element}` + " " + "Status: ".blue + (colors.blue(response.status)) + " " +  response.statusText.blue);
        } else if (statusCheck == 404) {
          console.log(`${fileName}`.cyan + " " + `${element}`.grey + " " + "Status: ".red  +  (colors.red(response.status)) + " " +  response.statusText.red);
        }
      })
      .catch(err => console.log(err));
  })

}
//statusDate();
module.exports.statusDate = statusDate;
