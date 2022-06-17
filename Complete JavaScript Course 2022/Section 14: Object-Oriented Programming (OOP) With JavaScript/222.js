'use strict';

// using the bank account from the Bankist App

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // using an empty array for account transactions/movements
    this.movements = [];
    // set the locale
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // Public interface of our objects (the methods below)
  // creating the deposit and withdraw method
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    // we can call other methods inside another method (has to be AFTER), we are also ABSTRACTING the - sign so we don't have to use it all the time
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  // in the public interface, we only want line 32-39 method
  requestLoan(val) {
    // making the loan request based on a condition of another method line 27
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// movements, not a good idea to use lines 23 and 24, better to use methods
// acc1.movements.push(250);
// acc1.movements.push(-140);
// console.log(acc1); // will output [250, -140]

acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1); // will output [250, -140] like before but with cleaner code

acc1.requestLoan(1000); // this is OK, we only want the public interface to be able to access this
acc1.approveLoan(1000); // this won't deposit 1000, but we DO NOT want this method on the public interface.  This is for data encapsulation and data privacy.  More details in next section.
