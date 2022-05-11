'use strict';

// remainder operator
console.log(5 % 2); // output is 1
console.log(5 / 2); // output is 2.5, 5 = 2 * 2 + 1, one is the remainder

console.log(8 % 3); // output is 2
console.log(8 / 3); // 2.666666666666, 8 = 2 * 3 + 2

// checking if a number is even or odd
console.log(6 % 2); // will give us zero, therefore an even number
console.log(7 % 2); // gives us 1, therefore an odd number

// function to check if even
const isEven = (n) => n % 2 === 0;
console.log(isEven(8)); // will output true
console.log(isEven(23)); // will output false
console.log(isEven(514)); // will output true

// practical example using index.html
// using remainder operator to change every other row to different colors, useful to use every Nth time you need something to execute
labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements_row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});
