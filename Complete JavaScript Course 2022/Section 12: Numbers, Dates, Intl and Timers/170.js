'use strict';

// example of floating point numbers
console.log(23 === 23.0); // this will be true in JS

// base 10 is 0 to 9
// binary base 2 is 0 and 1
console.log(0.1 + 0.2); // will output a goofy number
console.log(0.1 + 0.2 === 0.3); // output will be false

// converting sting to a number
console.log(Number('23')); // will convert string to a number
console.log(+'23'); // will convert string to a number, you can use this in all areas of your code where Number() is

// Parsing
console.log(Number.parseInt('30px')); // will output the number 30
console.log(Number.parseInt('e23')); // this won't give us the number 23, it will give us NaN, must START with a number

// Parsing using the redex second argument,  it is the base of the numeral system we're using
console.log(Number.parseInt('30px', 10)); // used with base 10 numbers, output will be 30
console.log(Number.parseInt('e23', 10)); // used with base 10 numbers, output will be NaN
console.log(Number.parseInt('30px', 2)); // used with binary numbers, output will be NaN
console.log(Number.parseInt('e23', 2)); // used with binary numbers, output will be NaN

// using parseFloat, will include the floating point number (decimal)
console.log(Number.parseFloat('2.5rem')); // will output the number 2.5
console.log(Number.parseFloat('   2.5rem   ')); // additional space won't effect the output
console.log(parseFloat('   2.5rem   ')); // can also work without the Number object, not as preferred

// isNaN, is not a number?
// check if value is NaN
console.log(Number.isNaN(20)); // will output false
console.log(Number.isNaN('20')); // will output false
console.log(Number.isNaN(+'20X')); // will output true
console.log(Number.isNaN(23 / 0)); // will output false, should be true b/c infinity isn't a number

// isFinite, best method used to find out if something is or isn't a number when using floating point numbers.  This is b/c of the last example when we used .isNaN on line 34 (JS gives us the wrong output)
console.log(Number.isFinite(20)); // will output true
console.log(Number.isFinite('20')); // will output false b/c it isn't a number
console.log(Number.isFinite(+'20X')); // will be false
console.log(Number.isFinite(23 / 0)); // will output false, give the accurate answer better than .isNaN

// .isInteger, best used if trying to see if something is an integer
console.log(Number.isInteger(23)); // will output true
console.log(Number.isInteger(23.0)); // will output true
console.log(Number.isInteger(23 / 0)); // will output false
