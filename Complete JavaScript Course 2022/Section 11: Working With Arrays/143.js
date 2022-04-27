'use strict';

const arr = [23, 11, 64];
console.log(arr[0]); // gives 23 as output
console.log(arr.at(0)); // gives same value as above, allows us to replace the traditional [] with a method

// we want the last element of the array but we don't know the length
console.log(arr[arr.length - 1]); // old way
console.log(arr.slice(-1)[0]); // old way using slice method
console.log(arr.at(-1)); // new way using at method, when you use negative it starts counting at the end of the array

// at method also works on strings
console.log('jonas'.at(0)); // gives us j
console.log('jonas'.at(-1)); // gives us s
