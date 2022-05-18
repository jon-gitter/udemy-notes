'use strict';

// mouseenter event, the event fires when the mouse enters a certain element
const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
});

// lookup javascript events on MDN for list of references

// attaching an eventListener to a element, this is an old school method, addEventListener is the new way
h1.onmouseenter = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
}; // does the same thing as lines 6-8

////////////////////////////////////////////

// removing a eventHandler
// step 1 is to import the function into a named function
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');

  h1.removeEventListener('mouseenter', alertH1); // removes the event listener, allows for the eventListener to only be listened to once
};

h1.addEventListener('mouseenter', alertH1);

// we could also remove it after a certain time has passed
setTimeout(() => h1.removeEventListener('mouseenter', alertH1, 3000)); // removes the eventListener after 3 seconds

//////////////////////////////
// using a HTML attribute to handle events, THIS SHOULD NOT BE USED
