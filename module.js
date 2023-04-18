//importing people file here
const {people,ages}=require('./people');
console.log(people,ages);

const os=require('os');//buile in module no need to export core modules
console.log(os.platform(),os.homedir());

