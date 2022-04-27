'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// we want to loop over the movements array to print a message for each movement in the bank account
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
// doing the same as above but using the forEach; forEach is a higher level function because it requires a callback function to tell it what to do
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
// below is what's going on in the above call back function
// 0: function(200)
// 1: function(450)
// 2: function(400)
// etc...

////////////////

// adding iterations to our output to the console
// 1st way
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// second way using forEach, you can add additional specifications to the parameters (current element, index, entire array)
movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
