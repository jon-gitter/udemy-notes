'use strict';

// Example 1

let f; // global scope

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f); // will show us the value of a

// reassigned f function
h();
f();
console.dir(f); // will show us the value of b NOT The value of a any longer

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000); // setting a timer function, first parameter is a function which will be executed, the second is how many milliseconds until the code in the function is executed after one second

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // even with this variable defined in the global scope it DOES NOT take priority over the perGroup inside the boardPassengers function, this is b/c of closure and how it has priority OVER the global scope
boardPassengers(180, 3); // closures allow us to utilize the perGroup variable inside the setTimer callback function, closures also include the arguments
