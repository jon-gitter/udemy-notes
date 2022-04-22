'use strict';

// can run a function only once using different techniques

// calling it only once, but if we call it again it will run again, we don't want this:
const runOnce = function () {
  console.log('This can run again');
};
runOnce();

// Immediately invoked function expression (IIFE)
// we can trick javascript by turning the function into an expression using () around the entire function
(function () {
  console.log('This will never run again');
  const isPrivate = 23; // this data is private/encapsulated inside the function scope
})(); // adding the additional () will call the function

console.log(isPrivate); // this won't work b/c the global scope does not have access to the scope inside the IIFE function, the scope chain only works the other way around, bottom to up. We say all data inside a scope is 'private'.

// IIFE in arrow function format
(() => console.log('This will ALSO never run again'))();

// block format
{
  const isPrivate = 23;
  var notPrivate = 46;
}
console.log(isPrivate); // the isPrivate variable cannot be accessed b/c it's inside a block
console.log(notPrivate); // the notPrivate variable WILL be accessed b/c var goes to a global scope
