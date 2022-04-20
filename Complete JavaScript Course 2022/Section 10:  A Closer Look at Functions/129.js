'use strict';

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 2897839292891,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2897839292891) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, jonas);
console.log(flight); // this will still only output LH234 to the console NOT LH999 because this is just pointing to the flight variable above
console.log(jonas); // this will have the Mr. added to the jonas object, b/c when we pass a reference type to a function what is copied is really just a reference to the object in the memory heap but it points to the same object in memory. Therefore when we manipulate the passenger object in the function it's manipulating the jonas object as well b/c they are both the same object in the memory heap.

// when passing a primitive type to a function is the same as creating a copy outside the function, the value is simply copied. When we pass an object to a function it is like copying an object, whatever we change in the copy will change the original.

// manipulating objects can effect code base with below example. Be weary of your code base.
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas); // will give us the Wrong Passport alert. This is because we have two functions manipulating the same object.  When we run the checkIn function it throws us the Wrong Passport alert because we manipulated the object a second time with the newPassport function.

// two terms used when dealing with functions: passing by value and passing by reference
// JS does NOT have passing by reference ONLY passing by value
// pass by reference would allow you to change the variable flight inside a function, remember JS cannot do this
// pass by value is what we use with objects in JS, a value contains a memory address. We pass A reference to the function but we do not pass BY reference
