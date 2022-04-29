'use strict';

// assuming these are in euros, we want to convert these into USD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;

// .map requires a callback function
const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
  //return 23 this will have 23 for each element of the movementsUSD array
});
console.log(movements); // shows that the map method does NOT mutate the movements array
console.log(movementsUSD);

// using a for of loop to do the same thing, this will loop through the existing array and create a new array
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * euroToUsd);
console.log(movementsUSDfor);

// simplified .map using arrow functions
const movementsUSDArrow = movements.map((mov) => mov * euroToUsd);

// using map method to loop over the movements array to create a string similar to the for each method we used in previous lecture. Place the new strings into an array.
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
