'use strict';

// Implementing TRULY private class fields and methods

// private class fields and methods are part of a larger proposal to improve and change JavaScript classes which is called Class fields. At this time, not yet part of the JavaScript language, very likely at some point.
// Why is this proposal called class fields? In traditional OOP languages like Java and C++, properties are usually called fields. With the new proposal JavaScript is moving away from the idea that classes are syntactic sugar over constructor functions.  With the new class feature classes now have new abilities we didn't previously have with the constructor functions.

// 4 different types of fields and methods:
// 1) Public fields - A field is like a property that will be on all instances, example of two fields below would be the ._movements and .locale b/c they are basically two properties that are gonna be on all the objects we create with this class, we do not pass any of the values into the constructor (empty array & navigator.language), they will always be set for all the instances.
// 2) Private fields - A field is like a property that will be on all instances, example of two fields below would be the ._movements and .locale b/c they are basically two properties that are gonna be on all the objects we create with this class, we do not pass any of the values into the constructor (empty array & navigator.language), they will always be set for all the instances.
// 3) Public methods -  nothing new to what we did before
// 4) Private methods - helps to hide the implementation details from the outside, syntax is the same as private fields
// (there is also the static version of each of the 4), see lines 53-56. Static is really used as helper functions this can only be used on the class itself and NOT on all the instances

////////////////////////////////////////////////

class Account {
  // 1) adding public fields, these will be present on all instances that we are creating through the class. They are NOT on the prototype.  The methods we added further down in our code will ALWAYS be added to the prototype. These public fields are also referenceable by the this keyword.
  locale = navigator.language;

  // 2) adding private fields, we can now make it so that properties are really truly not accessible from the outside. # symbol is the syntax that makes a field private in the new class proposal.
  #movements = [];
  #pin; // this is like creating a empty variable, it is redefined on line 24

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public Methods
  // Public Interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  // using a static method as a helper function, this can only be used on the class itself and NOT on all the instances
  static helper() {
    console.log('Helper');
  }

  // 4) Private Methods, no browser currently supports this, chrome will just turn it into a private field and outside the _proto_ field (not what we want). For now we just use the _
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);

acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1.getMovements()); // this will still give us the movements b/c we created a public method that allowed us to access the movements

// testing to see if the movement property is protected
console.log(acc1.#movements); // this will display a syntax error. The error is due to JavaScript thinking we're trying to implement a private class field outside the class.
console.log(acc1.movements); // this will return undefined
console.log(acc1.#pin); // cannot access the pin either, the class is private

// testing private method
console.log(acc1.#approveLoan(100)); // will give us an error, doesn't currently work with google chrome, right now it sees this as a private class field and NOT as a method

// static method
Account.helper();
