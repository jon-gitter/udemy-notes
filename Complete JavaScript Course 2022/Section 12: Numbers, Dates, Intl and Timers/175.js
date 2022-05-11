'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

//////////////////////////////////////////////////////////

// create a date
const now = new Date();
console.log(now); // will give the current time at the moment, 2022-05-11T20:27:17.275Z

// parse the date from a date string
console.log(new Date('December 24, 2015')); // will also give us the day of the week, not a good idea to do this b/c it can be unreliable
console.log(new Date(account1.movementDates[0])); // Z = coordinated time, time zone of London without daylight savings

// can pass in more date data into the constructor
console.log(new Date(2037, 10, 19, 15, 23, 5)); // will output Thu Nov 19 2037 15:23:05 GMT +0000; NOTE Javascript's months are zero based that's why 10 is november not 11+
// JavaScript will auto fix the date
console.log(new Date(2037, 10, 31)); // output will be Dec 01 b/c there are only 30 days in November

// can pass in the milliseconds passed since the beginning of the Unix time which is Jan 1, 1970
console.log(new Date(0)); // will output Jan 1, 1970
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // used to convert from days to milliseconds; 3 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds; the calculated number (259200000) is the timestamp of the day number 3

// working with dates and methods
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // will output 2037, there is also getYear() but NEVER use that
console.log(future.getMonth()); // will output 10, REMEMBER this is zero based; 10 = November
console.log(future.getDate()); // output is 4; 4 = thursday, it is also zero based
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString()); // ISO string which is an international standard
console.log(future.getTime()); // output is 2142256980000; gives us the timestamp from the beginning of Unix time
console.log(new Date(2142256980000)); // will output the same time but in a standard date time format

// method used get the timestamp for current time
console.log(Date.now()); // gives us current time stamp

// set versions of all methods used above
future.setFullYear(2040);
console.log(future);

// using concatenation to build current month/day/year, time
const now2 = new Date();
const day = `${now2.getDate()}`.padStart(2, 0); // this will add a 0 in front of the day number i.e. 02
const month = now2.getMonth();
const year = now2.getFullYear();
const hour = now2.getHours(); // time here will be static not constantly updating
const min = now2.getMinutes(); // time here will be static not constantly updating
labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
