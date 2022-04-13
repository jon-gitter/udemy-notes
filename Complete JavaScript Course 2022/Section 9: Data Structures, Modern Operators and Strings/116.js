'use strict';

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);

console.log(new Set('Jonas'));

// checks size of set
console.log(ordersSet.size);

// checks if values are in a set
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// adding new elements to a set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// deleting elements from a set
ordersSet.delete('Risotto');
console.log(ordersSet);

// how to delete all the elements of the set
// ordersSet.clear();
// console.log(ordersSet);

// looping over a set
for (const order of ordersSet) console.log(order);

// big use case for sets. Used to remove duplicates of arrays.
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// we just want to see how many unique positions are in the restaurant
const staffUnique = new Set(staff);
console.log(staffUnique);

// now we will convert a set back into an array. easy to do b/c they are both iterables
const staffUnique = [...new Set(staff)];

// how to see how many unique values are in an array, does not require that you create a new array.
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

// count how many different letters there are in a string
console.log(new Set('jonasschmedtmann').size);
