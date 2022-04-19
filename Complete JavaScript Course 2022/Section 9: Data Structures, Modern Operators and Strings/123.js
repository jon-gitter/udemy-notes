'use strict';

// .split() and .join()
// .split() string method, allows us to split a string into multiple parts based on a divider string
console.log('a+very+nice+string'.split('+')); // will split up the sting by the '+' sign into elements of an array
console.log('Jonas Schmedtmann'.split(' ')); // will split up the string by the space into elements of an array

// use destructuring to create variables directly
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// we want to make the last name uppercase and we want to add a Mr. in the beginning
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); // you could also substitute
console.log(newName);

// capitalize a name with multiple names
const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1);
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');
