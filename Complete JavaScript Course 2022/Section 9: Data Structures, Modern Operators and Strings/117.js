'use strict';

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

// can chain the set() method
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

// utilizing boolean keys in a map
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// check if a map contains a certain key
console.log(rest.has('categories'));

// delete elements from a map
rest.delete(2);
console.log(rest);

// shows the total length of a map
console.log(rest.size);

// clear a map
// rest.clear();
console.log(rest);
console.log(rest.size);

// can use arrays or objects as map keys
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.size);
// to get the data based on that array
console.log(rest.get(arr));

// using maps with DOM
rest.set(document.querySelector('h1'), 'Heading');
