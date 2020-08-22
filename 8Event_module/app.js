var events = require('events') 
const { EventEmitter } = require('events')
// Events is Inbuilt module

// fire callback function below,when with clcik evetn    

// Using EventEmitter
// This si event emmitter object    
var myEmmitter = new events.EventEmitter()
myEmmitter.on('clickevent',function(mssg){
    console.log(mssg)
});

myEmmitter.emit('clickevent','SOme event occured')
// We listened to clickevent with .on and with .emit emitting that event, when
// Callback function is fired it prints mssg as 'SOme event occured' 