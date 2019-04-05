const readURL = require('./readURL.js');
const paths = require('./pathsFind.js');
const fetch = require('node-fetch');


const statusDate = (regexMatch) => {
  regexMatch.forEach(element => {
    fetch(element)
      .then(response => {
        if (response.status == 200) {
          console.log(`${element}` + " " + "Status: " + response.status + " " + "\uD83D\uDE00 " +  response.statusText);
        } else if (response.status == 404) {
          console.log(`${element}` + " " + "Status: " +  response.status + " "  +  response.statusText);
        }
      })
      .catch(err => console.log(err));
  })

}
//statusDate();
module.exports.statusDate = statusDate;
