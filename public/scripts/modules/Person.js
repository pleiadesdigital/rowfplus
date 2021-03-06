/* OBJECTS */

// creating a constructor (blueprint) function (called a Class in other languages)
/* function Person(fullName, favColor) {
  this.name = fullName;
  this.color = favColor;
  this.greet = function () {
    console.log("Hello, my name is " + this.name + " and my favorite color is " + this.color + ".");
  }
} */

class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.color = favColor;
  }

  greet() {
    console.log("Hello there, my name is " + this.name + " and my favorite color is " + this.color + ".");
  }
}

// module.exports = Person; // nodejs way of exporting
export default Person; // ES6 way of exporting

