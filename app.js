const argv = require('./config/yargs').argv;
const info = require('./lugar/lugar');

info.getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);