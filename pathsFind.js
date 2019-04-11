const fs = require('fs');
const path = require('path');
const readURL = require('./readURL.js');
const fetch = require('node-fetch');
const statusLinks = require('./statusLinks.js');
const comandOptions = process.argv[3];
const comandOptionsOther = process.argv[4];
const pathAbsolute = path.resolve(process.argv[2]);

//Function to read path directory, found files .md and send command options for show data with opstions
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
                readURL.readLinkURL(data);
              } else if (comandOptions == '--stats') {
                readURL.readLinkStats(data);                
              } else if (comandOptions == '--links' ) {
                readURL.readLinkURLData(data);
              } else if (comandOptions == '--stats' && comandOptionsOther == '--validate'  ) {
                readURL.readLinkStatsBroken(data);
              
              }

            }
          )
        }

      });

     }

  });

}
module.exports = pathsMd;