'use strict';

// ordering a pizza
setTimeout(() => console.log('Here is your pizza'), 3000); // output will occur after 3 seconds, pass in the amount of time we want to pass before executed in milliseconds (3000 = 3 seconds)

// showing that the code will execute others past it, not just wait to execute then move on
console.log('Waiting...');

// passing arguments into the setTimeout function
// any arguments you put in past the delay will act as arguments to the function
setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  'olives',
  'spinach'
);

// how to cancel the timer until the delay has actually passed
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

///////////////////////////

// use setInterval to make a clock, the callback function will execute every second
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
