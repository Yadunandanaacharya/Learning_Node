    // var counter = function(arr){
    //     console.log()
    //     return 'There is '+ arr.length +' elements'
    // };

    // var adder = function(a,b){
    //     return `Using templates ${a+b}`
    // };

    // var pi = 3.142;

    // module.exports.counter = counter;  /*adding counter property separetely*/
    // module.exports.adder = adder;
    // module.exports.pi = pi;
//////////////////////////////////////////////////////////////////
// You can also directly do like below   

    // module.exports.counter = function(arr){
    //     console.log()
    //     return 'There is '+ arr.length +' elements'
    // };

    // module.exports.adder = function(a,b){
    //     return `Using templates ${a+b}`
    // };

    // module.exports.pi = 3.142;

// ///////////////////////////////////////////////////
    // Another method
    var counter = function(arr){
        console.log()
        return 'There is '+ arr.length +' elements'
    };

    var adder = function(a,b){
        return `Using templates ${a+b}`
    };

    var pi = 3.142;

    module.exports = {
        counter : counter,
        adder : adder,
        pi : pi
    };