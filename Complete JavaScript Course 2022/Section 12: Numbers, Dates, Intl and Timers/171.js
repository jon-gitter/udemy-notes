'use strict';

// square root
console.log(Math.sqrt(25)); // will output 5
console.log(25 ** (1 / 2)); // will output 5, second way to do square root
console.log(25 ** (1 / 3)); // cubic root

// max value of a couple of values
console.log(Math.max(5, 18, 23, 11, 2)); // output will be 23
console.log(Math.max(5, 18, '23', 11, 2)); // output is still 23 b/c this also has type coercion
console.log(Math.max(5, 18, '23px', 11, 2)); // output will be NaN b/c it won't parse

// min value of a couple of values
console.log(Math.min(5, 18, 23, 11, 2)); // output will be 2, has same functionality as max

// constants
console.log(Math.PI * Number.parseFloat('10px') ** 2); // used to calculate the area of a circle

// random number generation
console.log(Math.trunc(Math.random() * 6) + 1); // will give a random number between 1 and 6

// generate random integers between two values
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
console.log(randomInt(10, 20)); // will output a random number between 10 and 20 to include 10 and 20

// rounding integers, all below methods do type coercion
console.log(Math.trunc(23.3)); // gives us 23
console.log(Math.trunc('23.3')); // gives us 23

console.log(Math.round(23.3)); // gives us 23
console.log(Math.round(23.9)); // gives us 24
console.log(Math.round('23.9')); // gives us 24

console.log(Math.trunc(23.3)); // gives us 23
console.log(Math.round(23.9)); // gives us 24
console.log(Math.round('23.9')); // gives us 24

console.log(Math.ceil(23.3)); // gives us 24, rounds up
console.log(Math.ceil(23.9)); // gives us 24, rounds up
console.log(Math.ceil('23.9')); // gives us 24, rounds up

console.log(Math.floor(23.3)); // gives us 23
console.log(Math.floor(23.9)); // gives us 23
console.log(Math.floor('23.9')); // gives us 23

// using floor and trunc with negative numbers
console.log(Math.trunc(-23.3)); // gives us -23
console.log(Math.floor(-23.3)); // gives us -24, b/c with negative numbers rounding works a different way, this is better for dealing with negative numbers

// floating point numbers, aka decimals
console.log((2.7).toFixed(0)); // output is 3, will be converted to a string
console.log((2.7).toFixed(3)); // output is 2.700, will be converted to a string
console.log((2.345).toFixed(2)); // output is 2.35
console.log((+2.345).toFixed(2)); // output is 2.35, using the + will convert from a string to a number
