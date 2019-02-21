var $ = require('jquery');
var Person = require('./modules/Person');

alert("Fender Telecaster");

const john = new Person("John Doe", "blue");
john.greet();

const jane = new Person("Jane Smith", "green");
jane.greet();

$("h1").remove();
