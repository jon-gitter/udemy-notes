'use strict';

// highest 64 bit number
console.log(2 ** 53 - 1); // output is 9007199254740991, this is the highest number JS can safely represent
console.log(Number.MAX_SAFE_INTEGER); // gives us the same number, 9007199254740991
console.log(2 ** 53 + 1); // will give an incorrect number
console.log(2 ** 53 + 2); // will give an incorrect number
console.log(2 ** 53 + 3); // will give an incorrect number

// BigInt example
console.log(52465156548979854354132126316545641561651652); // will output a large number that most likely won't have precision
console.log(52465156548979854354132126316545641561651652n); // if we add the n it will convert it to a BigInt
console.log(BigInt(52465156548979854354132126316545641561651652)); // will give a different number and add an n to the end, better to be used with smaller numbers
console.log(BigInt(524651560));

// operations with BigInt
console.log(10000n + 10000n); // output is 20000n
console.log(654654841215646541541564654n * 56468948419515231213212n);
console.log(Math.sqrt(16n)); // won't work

// can't mix BigInt with regular numbers
const huge = 548784521894515481n;
const num = 23;
console.log(huge * num); // will give an error
// can use constructor function to make it work
console.log(huge * BigInt(num));

// comparison and plus operator when working with strings
console.log(20n > 15); // will work, output is true
console.log(20n === 20); // will output false b/c JS does not do type coercion with the === operator, 20n and 20 have different primitive types
console.log(typeof 20n); // will output bigint
console.log(20n == 20); // will output true
console.log(20n == '20'); // will output true

// BigInt with string concatenation
console.log(huge + ' is REALLY big!!!'); // will output 548784521894515481 is REALLY big!!!

// division with BigInt
console.log(10n / 3n); // will output 3n, the closest BigInt, essentially cuts the decimal point off
console.log(10 / 3); // will output 3.333333333333335
