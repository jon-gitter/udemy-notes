'use strict';

// Chaining Methods

class Account {
  // public class field
  locale = navigator.language;

  // private class fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Methods
  // Public Interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    // adding return and this b/c this is the current object, will make the method chainable, makes the most sense in methods that set some sort of property
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    // adding return and this b/c this is the current object, will make the method chainable, makes the most sense in methods that set some sort of property
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      // adding return and this b/c this is the current object, will make the method chainable, makes the most sense in methods that set some sort of property
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // Private Methods
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
console.log(acc1.getMovements());
console.log(acc1.#movements);
console.log(acc1.movements);
console.log(acc1.#pin);
console.log(acc1.#approveLoan(100));
Account.helper();

// return the object itself at the end of method we want to be chainable
// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements()); // will show all deposits, withdraws, and loan requests that we chained in line 74
