'use strict';

// we want to create an effect on page navigation where all the links fade out when we hover over one of them except the link we're hovering over.  This will teach us how to pass arguments in to event handler functions.

// in the HTML we will be working with the nav links  --- > <a class="nav__link" href="#section--1"> Features</a>

// menu fade animation
// we don't want to attach an event listener to each link, we should do event delegation instead

// we first need to find the common parent element of all the links (including the logo); the common parent element is <nav class ="nav"></nav>
const nav = document.querySelector('.nav');

// mouseover will bubble so it can reach the nav element
nav.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});

// we'll need mouse out to fire when we move the cursor away from the nav element
nav.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});

// we need to make our code more DRY b/c we're repeating ourselves

// first compare what is similar (opacity) between the two functions above, take the code and create an argument or parameter for the opacity, then pass that opacity into the function
const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

// we need a way to pass different arguments into the handleHover function because we need to set different opacities, we also need a way of passing in the event parameter
// addEventListener wants a function as the second parameter, we cannot just pass in ('mouseover', handleHover(e, 0.5)), we need to pass in a real function
nav.addEventListener('mouseover', function (e) {
  handleHover(e, 0.5);
});
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);
});

// we can make lines 59-60 better by eliminating the anonymous callback functions that are the second parameters of the addEventListener
// we will utilize the bind method to refactor; the bind method creates a copy of the function it's called on and will set the this keyword in the function call to whatever value we pass into bind
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//////// full refactor of code ////////

// can use this keyword where we used to have the opacity parameter b/c of the bind method, the this keyword is now our opacity
// we use the bind method to pass an argument into a handler function
// any event handler function can only have one "real" argument so only one "real" parameter (e in our example below), if we want to pass additional values into the handler function then we need to use the this keyword like we did below. If we wanted to use multiple values we could pass in an array or object instead of just one value (where we put in 0.5 and 1)
// this is a nice workaround since the handler function can only take one argument
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// passing "argument" into handler function
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
