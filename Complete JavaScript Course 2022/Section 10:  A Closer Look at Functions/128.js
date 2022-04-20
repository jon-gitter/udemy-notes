'use strict';

const bookings = [];

// new way to set default values is to set the parameter equal to what you want, for this we set numPassengers = 1. Default values can contain any expression (ex: price = 199 * 1.2), you can also set the values of other parameters set BEFORE it (ex: price = 199 * numPassengers)
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    // ES5, old way of setting default parameters
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
// the argument will supersede the default values
createBooking('LH123', 2, 800);

// if you want to keep the argument the parameter default you set it to undefined
createBooking('LH123', undefined, 1000);
