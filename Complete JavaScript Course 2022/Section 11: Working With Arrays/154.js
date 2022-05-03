'use strict';
////////////////////////////////////////////////////////////////////////
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
////////////////////////////////////////////////////////////////////////

// we want to take all movement deposits then convert them from euros to dollars then add them all up; we want to do it all in one go instead of individual methods

// pipeline
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0); // reduce has to be used last because it returns a value NOT an array
console.log(totalDepositsUSD);

/////////////////////////////////// -------- ///////////////////////////////////////////
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`; // Math.abs(out) takes away the - symbol in front of the value, gives us the absolute value since it's already in red in our html

  // putting interest with the account (1.2%), will only add interest to the account with deposits greater than 1
  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);
