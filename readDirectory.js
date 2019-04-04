
const directoryFind = () => {

const fs = require('fs');

const directoryRead = fs.readdir('./', (err, fileArchives) => {
    if (err){
        console.log(err);
    }else{
        console.log(fileArchives);
    }
});
return directoryRead;

}

module.exports = directoryFind();