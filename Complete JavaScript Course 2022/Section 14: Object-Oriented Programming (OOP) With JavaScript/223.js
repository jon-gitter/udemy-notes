'use strict';

// REMEMBER: encapsulation means to keep some properties and methods private inside the class so that they are not accessible from outside the class. Then the rest of the methods are exposed as a public interface (called APIs). Essential to do in anything more than a toy application.

// WHY WE NEED ENCAPSULATION and DATA PRIVACY: 1) to prevent code from outside a class to accidentally manipulate our data inside the class (can be seen at the end of last lecture acc1.movements.push(250) and acc1.movements.push(-140)), another reason why we implement a public interface (API), we should not be able to mess with the movements property directly we should encapsulate it.  2) When we only expose a small interface (a small API consisting only of a few public methods) then we can change all the other internal methods with more confidence. B/c we can be sure that external code does not rely on these private methods and therefore our code will not break when we do internal changes.

// BE AWARE: JavaScript classes actually DO NOT yet support real data privacy and encapsulation

// We will FAKE encapsulation by using a convention

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //protected property
    this._pin = pin;
    // protected property
    // first property we want to protect is the movements array, this is mission critical data
    this._movements = []; // we simply add a _ to the property name, this won't make the property truly private b/c this is just a convention. It's a way to mark the property for others to know it's not supposed to be touched outside of the class
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public Interface

  // creating a public method for the movements array
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // protected method, only used internally by the bank just to check if a loan should be approved
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);
acc1.deposit(250);
acc1.withdraw(140);
console.log(acc1);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

// // we could still access the data using code below, the _ makes it known to other devs that this is a private class and shouldn't be touched
// acc1._movements.push(250);
// acc1._movements.push(-140);

// this is now the correct way of getting the movements
console.log(acc1.getMovements()); // everyone can access the movements but they cannot override them, cannot set the movements. Unless they use the _ convention but it at least makes another step to prevent misuse
