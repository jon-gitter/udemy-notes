'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// we want to generate usernames for an individual person
const user = 'Steven Thomas Williams'; // username should be stw
const username = user
  .toLowerCase()
  .split(' ') // splits the string into words
  // loop over the username array and take the first letter of each element and putting it into a new array
  .map(function (name) {
    return name[0];
  })
  .join('');
console.log(username);

// rewritten with arrow function
const usernameArrow = user
  .toLowerCase()
  .split(' ')
  .map((name) => name[0])
  .join('');
console.log(usernameArrow);

// instead of having our username generate in the global scope it's best practice to put it into a function
const createUsernames = function (user) {
  const usernameArrow = user
    .toLowerCase()
    .split(' ')
    .map((name) => name[0])
    .join('');
  return username;
};
console.log(createUsernames('Steven Thomas Williams'));

// now we want to compute one username for each of the account holders in the accounts array, we use for each b/c we just want to loop over the accounts NOT create a new array (why we don't use the map method). This is called a side effect.
const createUsernames2 = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
};
createUsernames2(accounts);
console.log(accounts);
