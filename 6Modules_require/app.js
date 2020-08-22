// Using counter function in here
// Through global object
// For that we will use "require"

// require('./count');  /*No need to use counter.js*/
// console.log(counter([1,2,3,4,5,'Hai','bye']))
// Get error because   counter method is not variable to us outside the counter.js
// module
// Counter 
var counter = require('./count');
console.log(counter([1,2,3,4,5,'Hai','bye']))



