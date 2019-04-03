
const mdFind = () => {


const fs = require('fs');


fs.readFile('./README.md','utf-8', function(err, data){
if(err){
    console.log(err);
    
}else{

    const regexLink = /(https?:\/\/[^\s]+)/g;
    const regexMatch = data.match(regexLink); 
    console.log(regexMatch);
}
//console.log(data.toString());
});

};

module.exports = mdFind();