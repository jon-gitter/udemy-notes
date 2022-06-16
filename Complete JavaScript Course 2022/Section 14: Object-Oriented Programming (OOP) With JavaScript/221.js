'use strict';

// Inheritance Between "Classes": Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

// we want to add another prototype in the middle of the chain, between PersonProto and the object
// we want Student to inherit directly from PersonProto

const StudentProto = Object.create(PersonProto); // we can use this StudentProto to create new Students

// adding an init() method to StudentProto
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto); // the StudentProto we created earlier is now the prototype of the jay object. PersonProto is the parent prototype of jay

jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge(); // this will also work b/c its connected and higher up on the prototype chain
console.dir(jay); // will show the complete prototype chain

/////////////// SUMMARY ///////////////
// By using Object.create() we aren't "faking" classes like when we used inheritance with constructor functions, instead we are linking objects together where some objects then serve as the prototype of other objects.  ES6 and constructor functions are WAY more used in the real world, ES6 is probably the most popular.
