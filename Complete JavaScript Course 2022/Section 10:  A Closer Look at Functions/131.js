'use strict';

// we want to create function that accepts other functions as an input

// write two generic functions that do simple string transformations
const oneWord = function (str) {
  return str.replaceAll('').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// create the higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord); // upperFirstWord is the callback function
transformer('JavaScript is the best!', oneWord); // oneWord is the callback function

// Second example of callback function using DOM
const high5 = function () {
  console.log('wave');
};
document.body.addEventListener('click', high5); // .addEventListener is the higher order function, high5 is the callback function

// foreach function we call on arrays
['Jonas', 'Martha', 'Adam'].forEach(high5); // will output wave three times
