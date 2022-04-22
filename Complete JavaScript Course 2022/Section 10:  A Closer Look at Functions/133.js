'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    // this is the enhanced object literal syntax for writing methods
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

// with this new object we want to utilize the same book method but we don't just copy paste b/c it's bad practice. Instead we will take the book method and store it in an external function, we can then reuse that function for all the different airlines
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
book(23, 'Sarah Williams'); // this code DOES NOT WORK, will give us undefined b/c we stored the book function outside the object, when we call the book function it gives us undefined b/c this. is being utilized in the method inside the object

// we need to tell javascript to do a new booking on the eurowings airline, we need to tell JavaScript explicity what the this keyword here should be like
book.call(eurowings, 23, 'Sarah Williams'); // when using the .call() method the first argument is the object you are calling, replaces the this. code you normally write inside an object, can help to point to other objects but use the same method INSIDE another
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

// creating a new airline group
const swiss = {
  airline: 'Swiss Air Lines', // must use the same property names as original method/airline object above
  iataCode: 'LX', // must use the same property names as original method/airline object above
  bookings: [], // must use the same property names as original method/airline object above
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// .apply() method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData); // first argument of .apply() is the object/'.this' keyword, second argument is the array of data
console.log(swiss);

// same output but using the .call() method, utilizing spread operator to get all data from an array
book.call(swiss, ...flightData);
