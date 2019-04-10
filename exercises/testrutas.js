// module.exports = rutas () => {
//     process.argv;
// }
console.log(process.argv);
console.log(process.argv[2], process.argv[3]);

const path = require('path')
console.log(path.resolve(process.argv[2]));
