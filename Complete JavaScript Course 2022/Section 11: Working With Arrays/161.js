'use strict';

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

////////////////////////////////////////////////////////////////////////////

console.log(movements);
console.log(movements.includes(-130)); // returns true if any value in the array is exactly equal to -130, tests for equality

// SOME
// some method lets us test for a condition instead of a equality
// we would like to know if there has been any deposits on a certain account (any positive movement)
const anyDeposits = movements.some((mov) => mov > 0);
const anyDeposits2 = movements.some((mov) => mov > 5000);
console.log(anyDeposits); // output is true
console.log(anyDeposits2); // output is false

// EVERY
// every method only returns true if ALL of the elements in the array satisfy the condition that we pass in
console.log(movements.every((mov) => mov > 0)); // will output false
console.log(account4.movements.every((mov) => mov > 0)); // will output true

// separate callback, helpful to organize and use multiple different methods, better for DRY principle
const deposit = (mov) => mov > 0;
console.log(movements.some(deposit)); // will output true
console.log(movements.every(deposit)); // will output false
console.log(movements.filter(deposit)); // will output only positive elements
