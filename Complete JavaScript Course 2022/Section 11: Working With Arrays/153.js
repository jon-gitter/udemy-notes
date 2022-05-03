'use strict';

// reduce method is used to boil down all the elements in an array to one single value

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// we want to combine the movements array to give us the total balance of the account, this will give us one value NOT an entire array
// callback function for reduce method; first element is the accumulator (like a snowball for what we want to return), second is the current value, third is the current index, fourth is entire array
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0); // 0 here is the initial value of the accumulator in the first loop iteration, you can put any number here to start your accumulator at
console.log(balance);

// using a for of loop
let balance2 = 0;
for (const mov of movements) sum += mov;
console.log(balance2);

// rewritten using an arrow function
const balanceArrow = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balanceArrow);

/////////////////////////////////// -------- ///////////////////////////////////////////
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const labelBalance = document.querySelector('.balance__value');

// printing the results of balance with reduce method to the user interface
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

/////////////////////////////////// -------- ///////////////////////////////////////////

// can use reduce method for other things besides adding
// getting maximum value of the movements array using reduce
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
