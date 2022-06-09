'use strict';
// THE BIG TAKEAWAY --> Object.create() creates a new object and the prototype of that object will be the object we passed into Object.create()

// Object.create() is a way to manually set the prototype of an object to another object, makes the two objects linked through the __proto__: property
// Object.create() function can also be used to implement prototypal inheritance
// Object.create() still uses the idea of prototypal inheritance, however there are not prototype properties involved and no constructor functions and no new operator. Instead, we use Object.create() to manually set teh prototype of an object to any other object we want.

// creating an object that we want to be teh prototype of all the person objects

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

// creating a person object with the PersonProto object as the prototype, we use Object.create() to do that
const steven = Object.create(PersonProto); // this will return a brand new object that is linked to the prototype that we passed in.  So, steven is linked to the PersonProto object which will be its prototype
console.log(steven); // this will output an empty object, but inside __proto__: we see the calcAge function
// putting properties on the object
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); // will output 35 to the console, this is prototypal inheritance but in a different way

console.log(steven.__proto__); // output is exactly the object we specified on lines 8-12
console.log(steven.__proto__); // output will be true based on what we learned from line 22

const sarah = Object.create(PersonProto);

// we want to create a method that does the work of adding the name and birthyear properties

////////////////////////////////////////////////////////////

// NOTE: with Object.create() we can set the prototype of objects manually to any object we want
// Object.create() vs constructor function: we don't need to have a constructor function or a prototype property to achieve the same thing
// using Object.create() is the least used way of implementing prototypal inheritance but still very important

///////////////////////////////////////////////////////////
// we want to create a method that does the work of adding the name and birthyear properties

const PersonProto2 = {
  calcAge2() {
    console.log(2037 - this.birthYear);
  },
  // adding a new method, looks similar to an earlier constructor function we used but it isn't b/c we aren't using a new operator to call this
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// the this keyword in lines 44-45 points to the sarah object, it does so b/c we explicity called init on sarah. Remember this has nothing to do with the constructor functions we saw earlier. This is a manual way of initializing the object.
const sarah2 = Object.create(PersonProto2);
sarah2.init('Sara', 1979);
sarah.calcAge();

// we want to create a method that does the work of adding the name and birthyear properties
