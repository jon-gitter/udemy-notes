'use strict';

// every object in JavaScript can have setter and getter properties. These are special properties call assessor properties(getters and setters) while normal properties are called data properties. Getter and setter properties are basically functions that get and set a value but on the outside they look like regular properties.
// getters and setters can be useful with data validation
// another tool, not hugely used

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

console.log(account.latest); // returns 300, we "call" the getter like it's a property NOT a method

account.latest = 50; // setter acts like a property instead of a method, with a method we would have to call it like this --> account.latest(50)
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
  // using a getter, similar to setting a prototype
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

  // creating a setter for a property name that already exists, this setter is using data validation, it will check to see if it's a full name
  // whats important is that we're creating a setter for a property name that already exists. This means that anytime we execute the this.fullName in the class declaration we will also execute the setter since it has the same name, what we pass in as fullName for the class will be passed to the parameter of the setter (name)
  set fullName(name) {
    if (name.includes(' ')) this.fullName = name;
    // this will throw us an error b/c the setter and property have the same name, see below for correction
    else alert(`${name} is not a full name!`);
  }
}

const jessica2 = new PersonCl2('Jessica Davis', 1996);
console.log(jessica2);
jessica2.calcAge();

console.log(jessica2.age);

////////////////////////////////////////////////////////////////////
// b/c we have a setter with the same name as another property we need to change the this.fullName = name; to this._fullName = name

class PersonCl3 {
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
  // set property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    // the _fullName is creating a new variable, a new fullName variable
    else alert(`${name} is not a full name!`);
  }

  // because jessica.fullName doesn't exist we need to create a getter for the fullName property, this will return the _fullName
  get fullName() {
    return this._fullName;
  }
}

const jessica3 = new PersonCl3('Jessica Davis', 1996);
console.log(jessica3);
jessica3.calcAge();
console.log(jessica.age);

const walter = new PersonCl3('Walter', 1965); // b/c there is no space an alert will pop us telling the user that Walter is not a full name.
const walter2 = new PersonCl3('Walter White', 1965); // this will output to console without alert, will have _fullName: "Walter White", we can still access walter.fullName b/c of the getter on line 112.
