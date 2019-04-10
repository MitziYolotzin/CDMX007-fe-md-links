const fs = require('fs');
const path = require('path');
const readURL = require('./readURL.js');
const fetch = require('node-fetch');
const statusLinks = require('./statusLinks.js');
const comandOptions = process.argv[3];
const pathAbsolute = path.resolve(process.argv[2]);


const pathsMd = () => {

  fs.readdir(pathAbsolute, (err, data) => {
    if (err) {
      console.error('error', err);
    } else {
      data.forEach(element => {
        if (path.extname(element) === ".md") {
            fs.readFile(element, 'utf-8', (err, data) =>
            {
              if (err) {
                console.error('error', err);
              } else if(comandOptions == '--validate') {
                readURL.readLinkURL(data)
              } else if (comandOptions == '--stats') {
                console.log('aqui va la funcion stats')
              } else if (comandOptions == '--links'  ) {
                readURL.readLinkURLData(data)
              }
            }
          )
        }

      });

     }

  });

}
module.exports = pathsMd;