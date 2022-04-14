'use strict';

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

// read length property of strings
console.log(airline.length);
console.log('B737'.length);

// show position of where a letter is in the string or entire words
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal')); // case sensitive

// can use the .slice() method to extract parts of a string. slice method needs indexes as arguments.
console.log(airline.slice(4)); // 4 is the begin parameter, the position at which the extraction will start. result is a substring b/c its just part of the original string, does not change the underlying string impossible to mutate strings.
// can specify an end parameter
console.log(airline.slice(4, 7)); // stops extracting before reaching index number 7

// extract first word of the string without knowing any of the indexes
console.log(airline.slice(0, airline.indexOf(' ')));

// extract last word of the string without knowing any of the indexes
console.log(airline.slice(airline.lastIndexOf(' ') + 1));
//will start extracting from the end
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

// write a function that receives an airplane seat and logs to the console whether it's a middle seat or not. Assuming B & E are middle seats.
const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
