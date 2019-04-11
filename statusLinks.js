const readURL = require('./readURL.js');
const paths = require('./pathsFind.js');
const fetch = require('node-fetch');
const colors = require('colors');
const path = require ('path');
const comandOptions = process.argv[3];


//Function for show status links
const statusDate = (regexMatch) => {
  regexMatch.forEach(element => {
    const fileDates = path.parse(element);    
    const fileName = fileDates.name;

    fetch(element)
      .then(response => {
        const statusCheck = response.status;
        if (statusCheck == 200) {
          console.log(`Name : ${fileName}`.cyan + " " + `Link : ${element}`.yellow + " " + "Status : ".blue + `${response.status}`.blue + " " +  `${response.statusText}`.blue);
        } else if (statusCheck == 404) {
          console.log(`Name : ${fileName}`.cyan + " " + `Link : ${element}` + " " + "Status : ".red  +  `${response.status}`.red + " " +  `${response.statusText}`.red);
        }
         else if (statusCheck == undefined) {
          console.log("No response");
        }


      })
      .catch(err => console.log(err));
  })

}


const linksStatusFail = (regexMatch) => {
  let linksFail = [];
  regexMatch.forEach(element => {
    
      fetch(element)
      .then(response => {
          const statusFail = response.status;
          if (statusFail == 404) {
            linksFail.push(statusFail);
          }
      })
      .catch(err => console.log(err));
          
  });
setTimeout( () => {
  console.log(`Broken : ` + `${linksFail.length}`)  
},5000)
}





//statusDate();
module.exports= {statusDate, linksStatusFail};
