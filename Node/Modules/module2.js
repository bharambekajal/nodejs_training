console.log("Module 2 loaded");
const module1 = require('./module1');
module.exports = () => `${module1()} and Hello from Module 2`;