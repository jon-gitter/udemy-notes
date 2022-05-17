'use strict';

// we want to implement a feature when we click on a button it will smoothly scroll to the next section

// older version for implementation, manually calculating all the values for scrolling position

// first we need the id and section we want to scroll to
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

// add an event listener to the button
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords); // getBoundingClientRect will give us the coordinates of where we clicked, it is relative to the visible view port

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset); // gets current scroll position

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // we need the coordinate to tell JavaScript where to scroll to, we need to write our code to determine the absolute position of the element relative to the entire page NOT the viewport
  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  ); // first argument is left position, second is right

  // making the animation smooth, second way of scrolling, we need to put it in an object
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});

///////////////////////////////

// modern way for smooth scrolling, no longer need to include coordinates
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  section1.scrollIntoView({
    behavior: 'smooth',
  });
});
