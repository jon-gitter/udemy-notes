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
console.log(mike); // will output the Student object
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

///////////////////////////////////////////////////////////////
// manually linking the two prototype objects using Object.create(), b/c Object.create() helps us define prototypes manually

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
// making the Student.prototype object is now an object that inherits from Person.prototype.  We have to make this connection before we add anymore methods to the prototype object of Student (this is b/c Object.create() will return an empty object and so at line 73 Student.prototype is empty).
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge(); // output is 17 now that we've linked the Student and Person prototype objects. mike can now access the method (through prototypal inheritance) of the Person object even though we're calling mike that is with a Student constructor function.

console.log(mike.__proto__); // will output the Person object that contains the introduce method, this ALSO has a prototype of its own
console.log(mike.__proto__.__proto__); // this is the prototype that contains the calcAge() function, which is the object on lines 63-65

console.dir(Student.prototype.constructor); // ideally this should point back to the Student but it points back to Person, this is b/c we set the prototype property of the Student using Object.create(). This makes it so that the constructor of Student.prototype is still Person. We need to fix this b/c sometimes it's important to rely on the constructor property.

// correcting the constructor of Student.prototype
Student.prototype.constructor = Student;

// both 94 & 94 are true b/c we linked the prototypes together on line 74
console.log(mike instanceof Student); // output is true
console.log(mike instanceof Person); // output is true
console.log(mike instanceof Object); // output is true b/c mike is also an instance of Object b/c its inside it's prototype chain
