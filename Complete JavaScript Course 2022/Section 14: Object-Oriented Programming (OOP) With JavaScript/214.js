'use strict';

// every object in JavaScript can have setter and getter properties. These are special properties call assessor properties while normal properties are called data properties. Getter and setter properties are basically functions that get and set a value but on the outside they look like regular properties.
// getters and setters can be useful with data validation

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  // writing the getter
  get latest() {
    return this.movements.slice(-1).pop();
  },

  // writing the setter, must have at least one parameter
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest); // returns 300

account.latest = 50;
console.log(account.movements); // will output the entire array with the 50 at the end

///////////////////////////////////////////////
// using getters and setters with classes

class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.age); // same output as line 46

///////////////////////////////////////////////
// using getters and setters for data validation

class PersonCl2 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // creating a setter for a property name that already exists, this setter is using data validation
  set fullName(name) {
    if (name.includes(' ')) this.fullName = name;
    else alert(`${name} is not a full name!`);
  }
}

const jessica2 = new PersonCl2('Jessica Davis', 1996);
console.log(jessica2);
jessica2.calcAge();

console.log(jessica2.age);
