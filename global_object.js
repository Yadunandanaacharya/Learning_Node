// setInterval(() => {
//     console.log('This is Yadu, using arrow function, examples of global obhects')
// }, 3000);

// setInterval(function(){
//     console.log('Hai, Normal function')
// }, 300);

// setTimeout(() => {
//     console.log('Stop man')
// }, 3000);

let timeis = 0 
var timer = setInterval(() => {
    timeis +=2;
    console.log(timeis + 'seconds have passed')
    if(timeis > 10){
        clearInterval(timer)
        // stop    
    }
}, 200);


// To print a directory
console.log('This is directory  '+__dirname); 
console.log('This is filename   '+ __filename); 
 /*prints: PS D:\GITHUB_REPO_donot_add_delete\ABout_Nodejs> */

//  d:\GITHUB_REPO_donot_add_delete\ABout_Nodejs
// d:\GITHUB_REPO_donot_add_delete\ABout_Nodejs\global_object.js