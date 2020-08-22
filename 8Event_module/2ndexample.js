// //////USING UTIL MODULE
// Util module inherit certain things objects build into nodejs

var events = require('events');
var util = require('util')

var Person = function(name){
    this.name = name
};
// Inhert evenEmmitter
// Inherits Person

util.inherits(Person, events.EventEmitter);

var yadu = new Person('yadu');
var Nandan = new Person('Nandan');
var Acharya = new Person('Acharya');
var people = [yadu, Nandan, Acharya]

people.forEach(function(element){
    element.on('SpeakEvent', function(message){
        console.log(element.name + ' said ' + message )
    })
});

yadu.emit('SpeakEvent','Hai man');
//When you use SpeakEvent it will fire callback function.
//You can do like this for other 2 names.