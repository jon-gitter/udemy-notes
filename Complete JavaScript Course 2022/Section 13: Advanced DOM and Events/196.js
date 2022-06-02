'use strict';
/////////// previous code start ///////////
const section1 = document.querySelector('#section--1');
/////////// previous code end ///////////

// we want to create a feature that will attach the nav bar to the top of the page when we scroll down to a certain point; this is called "sticky navigation"
// essentially we add a "sticky" class when we reach a certain position, the "sticky" class sets position:fixed and background-color: rgba(255,255,255,0.9)

///// sticky navigation /////

// working with the scroll event
window.addEventListener('scroll', function () {
  console.log(window.scrollY); // each time the event is fired we get the current scroll position, helpful to tell us where we want to actually have it fire. The number is the TOP of the view port(what you're looking at) to the TOP of the page
});

////////// adding the sticky class //////////

// we want the nav sticky when it reaches the first section, we don't want to use a hard number b/c that depends on the different viewport size, we need to make it dynamic to the page

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords); // this will give us the current top value of the section we want the nav bar to stick to

window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  // need to write code that when our scroll reaches a position on the page which is greater than the distance of the first section from the top of the page the "sticky" class will be added
  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

// NOTE: using the scroll event is bad for performance b/c it fires every time someone is scrolling on the page no matter how small the changes (especially on mobile). Look at the next section (Intersection observer API) for a better way.
