'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

Person.prototype.species = 'Homo Sapiens';

console.log(jonas.__proto__); // contains the calcAge prototype and the species: property
console.log(jonas.__proto__.__proto__); // moving up the prototype chain, output is the prototype property of Object, Object.prototype
console.log(jonas.__proto__.__proto__.__proto__); // output is null, b/c object.prototype is the top of the prototype chain

console.log(Person.prototype.constructor); // output will be the function itself
console.dir(Person.prototype.constructor); // constructor property points back to Person.

////////////////////////////////////

//showing prototypes through arrays

const arr = [3, 6, 6, 4, 5, 6, 9, 9, 3]; // same as: new Array === [3, 6, 6, 4, 5, 6, 9, 9, 3], b/c when we create a new array it's made by the array constructor behind the scenes
console.log(arr.__proto__); // output shows all methods we already know (filter, find, findIndex, forEach, etc.), this is the reason why all the arrays get access to all of these methods. Each array doesn't contain all these methods, instead each array will INHERIT these methods from it's prototype (why we see Array.prototype.forEach() on MDN for example)
console.log(arr.__proto__ === Array.prototype); // output will be true

console.log(arr.__proto__.__proto__); // output is the object prototype, includes hasOwnProperty and other methods available for Objects. This is b/c the prototype itself is an object and any object has access to all object methods

////////////////////////////////////

// Since we know that any array inherits all their methods from its prototype, we can use this knowledge to extend the functionality of arrays by adding a new method to the prototype and all the arrays will inherit it.

// We want to create a method which returns all the unique elements of an array. Recap - we want to add a new method to the prototype property of the array constructor and therefore all arrays will inherit the method and we can call that method on any array we want.  Think of it as creating a custom method specifically for arrays. THIS IS GENERALLY NOT A GOOD IDEA but ok for small projects (next version of javascript might have the same name as what you created and when you work on a team it will confuse people if you use the same name with different things).
// method is created using the name unique
Array.prototype.unique = function () {
  // need to pass the array into a new Set, this keyword is the arr array we created on line 33
  return [...new Set(this)];
};

console.log(arr.unique()); // will output an array with only unique values, arr is the array we created on line 33

////////////////////////////////////

// remember all DOM elements are behind the scenes objects
const h1 = document.querySelector('h1');
console.dir(h1); // gives us the actual object for the h1 element, under __proto__ we see HTMLHeadingElement if you go to that __proto__ you'll see Element, if you go to Element's __proto__ you'll see Node, then __proto__:EventTarget, then __proto__: Object which is the end. HUGE prototype chain

// function example
console.dir((x) => x + 1); // the function itself is also an object, it also has a prototype. This prototype will contain all the methods we have used previously on functions (ex: apply, bind, call), this is the reason why we can call methods on functions. It's because they are objects and objects have prototypes and in this case the function prototype
