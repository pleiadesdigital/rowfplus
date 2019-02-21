const $ = require('jquery');
// const Person = require('./modules/Person'); //nodejs way of importing
import Person from './modules/Person'; // javascrip ES6 way of importing

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now ows $0 in taxes.");
  }
}

const john = new Person("John Doe", "blue");
john.greet();

const jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();

// $("h1").remove();
