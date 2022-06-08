'use strict';

// remember classes in JavaScript don't act like classes in other languages like Java, it's just syntactic sugar. They still implement prototypal inheritance but with a syntax that makes more sense.
// classes help us write our code cleaner, don't need to write out the entire .prototype for using methods, we can contain it INSIDE the class but outside the constructor therefor they will be automatically be added to the prototype property of the class.
// IMPORTANT info about classes: they are not hoisted (they cannot be used before they are declared in the code), classes are first-class citizens (we can pass them into functions and return them from functions, this is b/c they are a special kind of function behind the scenes), the body of a class is always executed in strict mode
// Classes vs constructor functions.  Basically personal preference, ok to use both. Make sure you understand prototypal inheritance if you use classes. Classes help to organize a bit better than just using constructors.

// implementing Person using a class

// class expression
const PersonCl = class {};

// class declaration
class PersonCl2 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // adding methods, all these methods outside the constructor will be on the prototype of the objects and not on the objects themselves (prototypal inheritance). Will be added to .prototype property of the Person class
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl2('Jessica', 1996);
console.log(jessica); // new object for jessica is stored here, can look into the __proto__ to see the calcAge() method

jessica.calcAge(); // output is 41
console.log(jessica.__proto__ === PersonCl.prototype); // output will be true

// adding a method manually to the prototype
PersonCl2.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet(); // output is Hey Jessica

////////////////////////////////////////////////////////

// can also include the greet method into the class
class PersonCl3 {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // adding methods, all these methods outside the constructor will be on the prototype of the objects and not on the objects themselves (prototypal inheritance). Will be added to .prototype property of the Person class
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}
jessica.greet(); // output will be Hey Jessica
