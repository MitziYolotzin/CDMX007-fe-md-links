const fs = require('fs');
const path = require('path');
const readURL = require('./readURL.js');
const fetch = require('node-fetch');
const statusLinks = require('./statusLinks.js');

const pathsMd = () => {

  fs.readdir('./', (err, data) => {
    if (err) {
      console.error('error', err);
    } else {
      data.forEach(element => {
        if (path.extname(element) === ".md") {
          fs.readFile(element, 'utf-8', (err, data) =>
            {
              if (err) {
                console.error('error', err);
              } else {
                readURL.readLinkURL(data)
              }
            }
          )
        }

      });

    }

  });

}
module.exports = pathsMd;

/*
let promesa = fetch(element);
promesa.then((res)=>{
  return res.json();
}) .then((data)=>{
console.log(data);
});
}
//
async function fetchLinks() {
  const res = await fetch (element);
  const data = await res.json();
  console.log(data);
}
  fetchLinks();
*/
