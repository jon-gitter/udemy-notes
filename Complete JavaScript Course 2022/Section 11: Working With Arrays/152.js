'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// the callback function for filter() method gets access to the current index and whole array but they are rarely used
// we want to create an array of all the deposits (above zero)
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

// using for of loop
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

// create an array for the withdraws (less than zero)
const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);
