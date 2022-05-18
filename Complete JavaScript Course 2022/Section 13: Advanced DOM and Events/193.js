'use strict';

const h1 = document.querySelector('h1');

// going downwards: selecting child elements
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); // will output more data, gives us every single node of every single type
console.log(h1.children); // output is a HTML collection which is a live collection, only gives us the 3 elements inside the h1
h1.firstElementChild.getElementsByClassName.color = 'white'; // only the first child gets color set to white
h1.lastElementChild.getElementsByClassName.color = 'orangered';

// going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)'; // if on the page there are multiple headers (multiple elements with a class of header), we only want to find the one that is a parent element of h1. Closest allows us to do that,it receives a query string like querySelector and querySelectorAll
h1.closest('h1').style.background = 'var(--gradient-primary)'; // will modify the h1 element itself

// going sideways: siblings; in javascript we can only access direct siblings (previous and next one)
console.log(h1.previousElementSibling); // output is null b/c there is nothing there
console.log(h1.nextElementSibling);

console.log(h1.previousSibling); // text
console.log(h1.nextSibling); //

// if we need all the siblings and not just the previous and next sibling we move to the parent element then read the children from there
console.log(h1.parentElement.children); // gives us all the siblings including itself
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
