var counter = function(arr){
    console.log()
    return 'There is '+ arr.length +' elements'
};

console.log(counter([1,2,3,4,5,'Hai','bye']))
// To avial counter to other .js files or modules

module.exports = counter;