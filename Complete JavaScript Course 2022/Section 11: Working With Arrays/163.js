'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); // sorts alphabetically, mutates the array
console.log(owners);

// Numbers
console.log(movements.sort()); // output is [-130, -400, -650, 1300,  200, 3000, 450, 70 ], this is b/c it sorts based on strings; negative first, then the first number of each number so on so on
console.log(movements);

// can be fixed below with a callback function and two arguments:
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements); // sorts in ascending order

// descending
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movements); // sorts in descending order

/////// improved versions

// ascending
movements.sort((a, b) => a - b);
console.log(movements);

// descending
movements.sort((a, b) => b - a);
console.log(movements);
