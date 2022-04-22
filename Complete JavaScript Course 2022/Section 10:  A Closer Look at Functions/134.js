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

// -------------------------- .bind() method ----------------------------- //

//////// .bind() method, we need to use the book function for eurowings ALL the time ////////////
book.call(eurowings, 23, 'Sarah Williams'); // replicated below

const bookEW = book.bind(eurowings); // will not call the book function, instead it will return a new function where the '.this' keyword will be set to eurowings
bookEW(23, 'Steven Williams'); // with this function call the '.this' keyword is set in stone from the previous line of code (line 59), parameters only need to be the flight number and name, unlike .call() where we have to specify the object

// can now do the same with all of the other airlines, helpful if needed to do a function call with that method multiple times
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

// can also bind arguments by putting a specific parameter inside of bind
const bookEW23 = book.bind(eurowings, 23); // since the object is specified (eurowings) and the flight number (23) we need to call the passenger name since it will be the only argument not bound from this .bind() method
bookEW23('Jonas Schmedtmann'); // allows us to call the function with the name being the only unbound value
bookEW23('Martha Cooper'); // allows us to call the function with the name being the only unbound value

// using .bind() with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); // won't work, the '.this' keyword will give us NaN, b/c the '.this' keyword on line 76 is the button element from the eventListener.  This is because in event handler function the '.this' keyword always points to the element on which that handler is attached to.  The lufthansa.buyPlane is the handler function attached to the document.querySelector('.buy') element/button. Therefore inside of the event handler function (lufthansa.buyPlane) the '.this' keyword will point to the button element NOT the object.  Proof that the '.this' keyword is set dynamically.

// we need to manually define the '.this' keyword inside the function
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // we use .bind() here and not .call() because we need to pass in a function NOT to call a function in order to utilize the '.this' keyword. The .call() method only CALLs a function the .bind() method returns a NEW function

// additional example of partial application using .bind() method
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // utilize null when we don't have a '.this' in the function we're calling. Equivalent to addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// rewrite making one function returning another function from lines 87-93
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
