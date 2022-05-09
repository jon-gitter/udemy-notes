'use strict';

// learning how to programmatically create and fill arrays

// created arrays until now like this:
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// how to create an array programmatically

// can use the array constructor function:
const x = new Array(7); // this creates an array with 7 EMPTY elements, can't call the map method to fill the array
console.log(x);
console.log(x.map(() => 5)); // this will do nothing
// can use the fill method on an empty array:
x.fill(1); // mutates the array
console.log(x.fill(1)); // will output an array with 7 elements of 1

x.fill(1, 3, 5); // second parameter (begin parameter) will specify where we want it to start filling, third parameter is the end parameter
console.log(x); // output is [empty x3, 1, 1, empty x2]

arr.fill(23, 2, 6);
console.log(arr); // output is [1, 2, 23, 23, 23, 23, 7]

///////////////////////////////////////////////////////////////////////////
// what if we want to create the arr array programmatically?
// Array.from, the Array is a function we call the .from() method on that function
const y = Array.from({ length: 7 }, () => 1); // first argument sets the length, second argument is a mapping function (similar to callback function used in map method)
console.log(y); // will output an array with x7 1's

// creating an array from 1 to 7
const z = Array.from({ length: 7 }, (cur, i) => i + 1); // inside the callback function the first parameter is the current element, second is the current index (this index will vary between 0 and 6). Very similar to the map method. can put _ instead of cur, b/c we don't need to use it
console.log(z); // output is [1,2,3,4,5,6,7]

// additional examples of using the Array.from() function

// querySelectorAll() returns a NodeList, similar to an array which contains all the selected elements, not a real array it does not have methods like map or reduce. If we want to use a real method on a NodeList we first need to convert the NodeList to an array, Array.from() is perfect for this

// we want the some of values from the user interface
const movementsUI = Array.from(document.querySelectorAll('.movements_value')); // in the html for bankist app is where the .movements_value is from
console.log(movementsUI); // will only display two transactions

// creating the ability to read all the user movements when clicking on the overall balance button
labelBalance.addEventListener('click', function () {
  const movementsUI2 = Array.from(
    document.querySelectorAll('.movements_value')
  );
  console.log(movementsUI2);
  console.log(
    movementsUI2.map((el) => Number(el.textContent.replace('€', '')))
  ); // this will give us an array with just the values of the transactions without the euro symbol, we are not able to do this on line 46
});

// improved version:
labelBalance.addEventListener('click', function () {
  const movementsUI3 = Array.from(
    document.querySelectorAll('.movements_value'),
    (el) => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI3);

  // additional way of converting to an array
  const movementsUI4 = [...document.querySelectorAll('.movements_value')];
});
