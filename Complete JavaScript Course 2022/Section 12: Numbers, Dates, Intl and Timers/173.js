'use strict';

// we want to represent a really large number
const diameter = 287460000000;

// usually we write the number with commas: 287,460,000,000

// can be written in JS using numeric separators
const diameter2 = 287_460_000_000;
console.log(diameter2); // output will be 287460000000, it ignores the separators

const priceCents = 345_99;
console.log(priceCents); // output will be 34599

const transferFee = 15_00;
const transferFee2 = 1_500;

// restrictions on where we can place the underscore
const PI = 3.14_15; // can only place underscores between numbers
console.log(PI); // can only place underscores between numbers

const PI2 = 3._1415;
console.log(PI2); // will give us an error, b/c we can't put underscore next to a decimal

// converting strings that contain underscores 
console.log(Number('230000')); // works fine
console.log(Number('230_000')); // gives us NaN, won't work, only use numeric separators when using numbers
console.log(parseInt('230_000')); // will only output 230, all other zeros are ignored
