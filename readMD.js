const fs = require('fs');
const readURL = require('./readURL');
const readingMd = {};

const mdFind = () => {

  fs.readFile('./README.md', 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      readURL.readLinkURL(data);
    }
  })
};

mdFind();

//module.exports.mdFind = mdFind;
module.exports.readingMd = readingMd;
