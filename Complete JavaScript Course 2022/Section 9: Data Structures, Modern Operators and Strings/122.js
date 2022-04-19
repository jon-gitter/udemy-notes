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

// comparing emails, using different capitalization only NOT different letters
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n'; // \n is a enter character
// convert to lower case
const lowerEmail = loginEmail.toLowerCase();
// get rid of white space and enter
const trimmedEmail = lowerEmail.trim(); // .trim() removes white spaces and enter
// can do everything above in one line of code
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

// replacing individual letters
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); // replace takes the first argument and changes it to the second argument
console.log(priceUS);

// replace words instead of individual letters
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate')); // will replace all door with gate

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Airb')); // true
// check if new plane is part of the airbus family
if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// practice exercise: we want to check if the baggage of a certain passenger is allowed to be checked in
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food, and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
