// Normal function statement
function sayHi(){
    console.log("Hi")
}

sayHi();

// Function expression
var sayBye = function(){
    console.log('This is like anonymous function'+'Bye')
};

sayBye();

//Caliing Function inside function
function callFunction(fun){
    fun();
}

var sayGood = function(){
    console.log('Calling function inside function')
};
callFunction(sayGood);