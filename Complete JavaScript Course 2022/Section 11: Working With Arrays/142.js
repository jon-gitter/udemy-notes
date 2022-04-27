'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

////////////////////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// slice method, we can extract part of any array without changing the original array
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // can dictate start and end parameter
console.log(arr.slice(-1)); // will take last element of the array
console.log(arr.slice(1, -2)); // will get b and c
console.log(arr.slice()); // will give us a shallow copy of the array
console.log([...arr]); // this or the slice method works to make a shallow copy, either is fine. slice is beneficial when you want to chain multiple methods together

// splice method, similar to slice BUT it changes the original array
console.log(arr.splice(2)); // will output c d e
console.log(arr); // all that remains in array are a b; c d e were taken out
arr.splice(-1); // will take away the last element in the array
arr.splice(1, 2); // second parameter of splice will say the number of elements we want to delete, will show a d

// reverse method, reverses elements in the array; this WILL mutate the original array
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); // this proves that the reverse method mutates an array after it's applied

// concat method, used to link two arrays together, first array is on the method called the second is the one we pass into the concat method. Does NOT mutate
const letters = arr.concat(arr2); // puts all letters together
console.log([...arr, ...arr2]); // gives us the same result and will also NOT mutate

// join method
console.log(letters.join(' - ')); // will output a string with a - between each letter
