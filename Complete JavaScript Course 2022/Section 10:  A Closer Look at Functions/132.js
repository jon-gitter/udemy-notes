'use strict';

// we want to create a function that returns a new function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// we put the function call into a variable so we can call that variable (since it's now a function) with a argument to return the function in a function
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

// can do everything above but in one go
greet('Hello')('Jonas'); // greet('Hello') is a function, we can add ('Jonas') b/c it would be the argument of the greet('Hello') function

// rewrite the greet function above using arrow functions
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');
