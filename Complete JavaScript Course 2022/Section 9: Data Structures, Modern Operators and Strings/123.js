'use strict';

// .split() and .join()
// .split() string method, allows us to split a string into multiple parts based on a divider string
console.log('a+very+nice+string'.split('+')); // will split up the sting by the '+' sign into elements of an array
console.log('Jonas Schmedtmann'.split(' ')); // will split up the string by the space into elements of an array

// use destructuring to create variables directly
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// we want to make the last name uppercase and we want to add a Mr. in the beginning
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); // you could also substitute
console.log(newName);

// capitalize a name with multiple names
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');
// second way of getting same solution of line 16-26
const capitalizeName2 = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName2('jessica ann smith davis');
capitalizeName2('jonas schmedtmann');

// padding a string (padding is adding a number of characters to the string until the string has a certain desired length)
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); // first argument puts total number of characters after the padding, second argument is what you want to pad with.  The number in first argumen tis TOTAL characters including the padding and in this case the string from message variable.
console.log('Jonas'.padStart(25, '+')); // will have more + b/c we want 23 total spaces including the Jonas string
console.log(message.padStart(25, '+').padEnd(35, '+')); // padEnd() will add 35 +'s to the end of the string

// real world example of padding using masking, only want to see last 4 digits of credit card number
const maskCreditCard = function (number) {
  const str = number + ''; // result of this is it takes a number and turns it into a string
  const last = str.slice(-4); // slices off last 4 numbers
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(47379873928934));
console.log(maskCreditCard('3347838293702093'));

// repeat method, allows us to repeat the same string multiple times
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5)); // number is number of times you want to repeat

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

// can get other string methods on MDN, search "mdn string replace" for example, look on left of screen for full list
