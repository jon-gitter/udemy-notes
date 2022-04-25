'use strict';

// function is called secureBooking b/c the passengerCount variable cannot be manipulated and accessed from the outside
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); // booker is now a function, because we called a function that returns another function

booker(); // 1 passenger
booker(); // 2 passengers
booker();

console.dir(booker); // this allows us to look inside the scopes/variable environment of the booker function. Lets us see the closure of secureBooking(). when you double brackets ([[]]) that means its an internal property which we cannot access from our code
