'use strict';

// doing calculations with dates

// calculating how many days have passed between two dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(Number(+future)); // output is 214225698000, converted to a number, allows us to do calculations

// create a function that takes in two dates and return the number of days that pass between the two dates
// HINT: can use absolute value if you don't always assume that date2 is after date1
const calcDaysPassed = (date1, date2) =>
  (date2 - date1) / (1000 * 60 * 60 * 24); // will convert to days from milliseconds

const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
console.log(days1); // output is 10, which is 10 days difference between the two dates we put as arguments

// can use absolute value if you don't always assume that date2 is after date1
const calcDaysPassed2 = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days2 = calcDaysPassed2(new Date(2037, 3, 14), new Date(2037, 3, 4));
console.log(days2); // output is 10 not -10 b/c we added Math.abs

// adding time to one of the dates, use Math.round to get a more accurate number
const days3 = calcDaysPassed2(
  new Date(2037, 3, 4),
  new Date(2037, 3, 14, 10, 8)
);
console.log(days3);
