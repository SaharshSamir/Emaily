//decide wether we are in dev or prod
if(process.env.NODE_ENV === 'production'){
    //return production set of keys
    module.exports = require('prod.js');
}
else{
    //return dev set of keys
    modules.exports = require('./dev');
}