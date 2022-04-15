'use strict';

const airline = 'TAP Air Portugal';

// changing the case of a string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// can call directly on a string
console.log('jonas'.toUpperCase());

// fix capitalization in name (can also write this in a function to take any passenger names)
const passenger = 'jOnAS'; // needs to be Jonas
const passengerLower = passenger.toLowerCase(); // converts to all lower case
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1); // changes first letter of string to capital letter
console.log(passengerCorrect);

// comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n'; // \n is a enter character

/////// start at 5:10
