'use strict';
// Prototypes: each function in javascript automatically has a property called prototype, including constructor functions. Every object created by a certain constructor function will get access to all the methods and properties that we define on the constructors prototype property.

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

// prototype, allows us to use a method on an object without it being INSIDE the constructor.  This is an example of prototypal inheritance
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

console.log(Person.prototype); // output is the prototype property we just defined on lines 14-16.

// using the prototype
jonas.calcAge(); // output will be 46 to the console.
new Person('Jonas', 1991).calcAge(); // this is the same as line 21 just rewritten to show what's going on
matilda.calcAge(); // output is 20 to the console

console.log(jonas.__proto__); // output is the prototype of jonas
console.log(jonas.__proto__ === Person.prototype); // output is true, jonas' prototype is the prototype property of the Person constructor function

console.log(Person.prototype.isPrototypeOf(jonas)); // will output true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// can also set properties on the prototype. These will NOT be directly in the object, not it's own property, own properties are declared on the object itself not including the JavaScript properties
Person.prototype.species = 'Homo Sapiens';
console.log(jonas); // Homo Sapiens will be listed under __proto__ --> species: "Homo Sapiens"
console.log(jonas.species); // output will be Homo Sapiens

// how to check for own properties vs properties set on prototype
console.log(jonas.hasOwnProperty('firstName')); // will output true
console.log(jonas.hasOwnProperty('species')); // will output false, b/c this property isn't really inside the Jonas object, has access to it b/c of the prototype on ine 33
