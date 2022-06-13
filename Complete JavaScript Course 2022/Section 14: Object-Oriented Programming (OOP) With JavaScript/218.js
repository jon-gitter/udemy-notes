'use strict';

// parent class is Person, child class is Student

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// usually we want a child class to have the same functionality as the parent class but with some additional functionality. Usually pass in the same arguments but add some additional ones.
const Student = function (firstName, birthYear, course) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();

///////////////////////////////////////////////////////////////
// improved version of the Student constructor

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

// usually we want a child class to have the same functionality as the parent class but with some additional functionality. Usually pass in the same arguments but add some additional ones.
const Student = function (firstName, birthYear, course) {
  // using the call method on the Person function, we can specify the this keyword as the first argument of the function
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
