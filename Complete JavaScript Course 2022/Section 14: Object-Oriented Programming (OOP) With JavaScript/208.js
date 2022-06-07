'use strict';

// Constructor functions: we can use constructor functions to build an object using a function. It is a completely normal function the only difference is we call it with the "new" operator. Constructor functions usually start with a capital letter. Arrow function will NOT work, b/c it doesn't have it's own this keyword.
// function constructors are not really a feature of the javascript language, they are simply a pattern that has been developed by other developers

const Person = function (firstName, birthYear) {
  console.log(this); // will output the empty object from step 1 below
};

new Person('Jonas', 1991); // when we call a function with new: 1. a new empty object is created 2. function is called, this keyword is set to newly created object 3. newly created object is linked to prototype 4. the created object is automatically returned from the constructor function

////////////////////////////////////////

const Person = function (firstName, birthYear) {
  // below are the instance properties, b/c the properties firstName and birthYear are available on all the instances that are created through this constructor function
  this.firstName = firstName; // properties don't have to match parameters we set, good practice to do so
  this.birthYear = birthYear;

  // method, NEVER do this DO NOT create a method inside a constructor function. B/c if you were to create 1,000s of objects with this constructor function they would all carry around the method slowing code performance. We solve this with prototypes (next lesson).
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas); // Person object will be displayed like so: Person {firstName: "Jonas", birthYear: 1991}

////////////////////////////////////////

// we can create as many objects we want based on the constructor function
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

// JavaScript uses constructor functions to simulate classes therefore, we can say jonas is an instance of Person (same with matilda and jack).

const jay = 'Jay';

// can use an operator to test for instances
console.log(jonas instanceof Person); // output is true
console.log(jay instanceof Person); // output is false
