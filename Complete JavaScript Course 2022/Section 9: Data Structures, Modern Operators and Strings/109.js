'use strict';

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// we want to set a default number of guests for all the restaurant objects that don't have that property. We are pretending we got these restaurant objects from some kind of API and now we want to apply something to all of them. Basically adding the numGuests property to the objects that don't have them.

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// logical OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// logical nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// logical AND assignment operator
rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
