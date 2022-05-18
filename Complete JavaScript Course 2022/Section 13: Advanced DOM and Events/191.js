'use strict';

// attaching event handlers to a navigation link and all it's parent elements, as we click the link we want to give all the elements random background colors

// creating the random color; rgb(0, 0, 0) to rgb(255,255,255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

console.log(randomColor(0, 255));

// attaching the event handlers to the links at the top of the page and to the parent elements
// link in HTML is nav__link (name is Features on the page) and nav__links (entire header)
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(); // output will change the background of Features on the page with a random color; this on an event handler will ALWAYS point to the element on which that event handler is attached
  console.log('LINK', e.target, e.currentTarget); // target is WHERE the event originated, current target is the element on which the event handler is attached
  console.log(e.currentTarget === this); // will output true, shows that e.currentTarget and this are the same

  // Stopping the event propagation, typically NOT a good idea in practice, but can be useful for debugging and figuring out stuff when there is multiple handlers for the same event
  e.stopPropagation(); // will keep the background colors from changing for the parent elements, only the Features background color will change
});

// parent element
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(); // when Features is clicked it will give the Features a random background color AND the entire nav bar a different background color (there will be two different colors for each). We can ONLY change the background of the nav bar if we click on the nav bar itself, Features won't change color
  console.log('CONTAINER', e.target, e.currentTarget); // target is WHERE the event originated
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor(); // will change the color of the ENTIRE header
    console.log('NAV', e.target, e.currentTarget); // target is WHERE the event originated
  },
  // by default below is set to false NOT true (or not written at all), true is rarely used
  true // this third parameter in the .addEventListener, if true it will no longer listen to bubbling events but to capturing events. For our example the colors will change the same BUT in the console.log the NAV will be the first that appears NOT the last. This is because the element is now listening for the event as it travels DOWN from the DOM versus listening while it travels back UP (bubbling phase)
);
