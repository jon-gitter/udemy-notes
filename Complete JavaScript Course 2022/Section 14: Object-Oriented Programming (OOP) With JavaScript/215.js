'use strict';

// using Array.from() method in the console, Array.from() will convert any array like structure into a real array.
// Example:
Array.from(document.querySelectorAll('h1')); // this will output [h1] when entire code is written in the console

// the .from() method is attached to the Array constructor that means we could not use the .from() method on an array
// example:
[1, 2, 3].from(); // this would not work, b/c .from() is not a function.  This is b/c the .from() method is attached to the entire array constructor and not to the prototype property of the constructor. Therefor all the arrays don't inherit this method. It's not on their prototype it's attached to the constructor itself.

// Array.from() is a simple function but a function that's attached to the Array constructor.  Allows developers to know that it's related to Arrays.  We also say that the from() method is in the Array name space. Similar to Number.parseFloat(), this is another static method on the number constructor, it's not available on numbers but on this very constructor

// we use static methods as helpers that should be related to a certain constructor

// Remember: these static methods are not available on the instances, sometimes still useful to implement some kind of helper function about a class or about a constructor function.

//////////////////////////////////////////////
// implementing static methods with constructor function and a class

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// adding a static method to create a simple Hey! function that waves
Person.hey = function () {
  console.log('Hey there!');
  console.log(this); // output will be the entire constructor function, b/c it is exactly the object that is calling the method, the this keyword is the entire constructor function
};

const jonas = new Person('Jonas', 1991);

Person.hey(); // will output Hey there! to the console, this is NOT inherited
jonas.hey(); // this will NOT work, this is NOT in the prototype of the jonas object, no way that the jonas object could inherit it

/////////////////////////////////////////////////////////////////
// implementing static method with a class

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance methods
  // methods will be added to .prototype property
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

  // static method
  static hey() {
    console.log('Hey there!');
    console.log(this);
  }
}

PersonCl.hey(); // output will be Hey there!, the instance method points to the entire class
