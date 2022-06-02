'use strict';

/////////// previous code start ///////////
const section1 = document.querySelector('#section--1');
/////////// previous code end ///////////

// implementing the same sticky nav bar as previous lesson but now using intersection observer API
// intersection observer API: allows our code to observe changes to the way that a certain target element intersects another element or the way it intersects the viewport

// how to use the intersection observer API

new IntersectionObserver(); // step 1 create the new intersection observer
// step 2 pass in a callback function and an object of options

/////////////// practical example ///////////////
const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null, // root is the element the target is intersecting, we use null b/c we can observe our target element intersecting the entire viewport
  threshold: 0.1, //percentage (10%) of intersection at which the obsCallback function will be called
};

const observer = new IntersectionObserver(obsCallback, obsOptions); // can write the two functions inside the IntersectionObserver() but we created variables that make it look cleaner
observer.observe(section1); // need to use observer to observe a certain target, () holds the target element

/////////////// practical example with array as the threshold ///////////////

const obsCallback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2], // 0% means the callback will trigger each time the target element moves completely out of the view and as soon as it enters the view (we couldn't use 100% b/c the section is larger than the viewport).  The callback will trigger multiple times while scrolling down the page, at 0% and 20% for each section
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

///////////////////////////////////////
/////////////// implementing with sticky navigation ///////////////
///////////////////////////////////////

// we want the nav to be sticky when the header is completely out of view, we want to observe the header element

const header = document.querySelector('.header');

// this function adds and removes the sticky class
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  // we put the options object INSIDE the IntersectionObserver() instead of separate variable like we did above
  root: null,
  threshold: 0,
  rootMargin: '-90px', // box of 90 pixles that will be applied before the threshold was reached, in this case the header. 90 is the height of the navigation
});

headerObserver.observe(header);

/// refactored for dynamic rootMargin

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height; // change for dynamic rootMargin

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, // change for dynamic rootMargin
});

headerObserver.observe(header);
