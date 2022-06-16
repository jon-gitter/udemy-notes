'use strict';

// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there!');
  }
}

// making the student class inherit from the person class using the extends keyword, this will link the prototypes behind the scenes
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // do NOT need to manually call like in the constructor function before using PersonCl.call(), we call the super() function instead. super() is the constructor function of the parent class
    // pass in the arguments of the parent class
    super(fullName, birthYear); // super() always needs to happen first! B/c the call to the super() function is responsible for creating the this keyword in the subclass. Without super we wouldn't be able to access the this keyword
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }
  // overriding the calcAge() method from line 16-18, b/c it appears first in the prototype chain. it is "shadowing" the one in the parent class
  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

// the prototype chain here is the same as when we created it manually using Student.prototype = Object.create(Person.prototype);
const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge(); // this also works from the PersonCl class

console.dir(martha); // shows us the prototype chain was set up automatically by the extends keyword on line 40
