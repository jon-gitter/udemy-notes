'use strict';

// Selecting elements
console.log(document.documentElement); // selects the entire document of a webpage, will ouput the entire HTML of the webpage
console.log(document.head); // selects HTML head
console.log(document.body); // selects HTML body

// to select one element
document.querySelector('.header'); // this will return the first element that matches the selector '.header'

// to select multiple elements
const allSections = document.querySelectorAll('.section');
console.log(allSections); // output is a node list with all the elements that are a section

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); //output is all buttons on the page, this method returns an HTML collection (different from a node list)

console.log(document.getElementsByClassName('btn')); // will also return a live HTML collection

//////////////////////////////////////
// creating and inserting elements
// .insertAdjacentHTML is a quick and easy way of creating elements

// other ways of creating elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class = "btn--close-cookie">Got it!</button>';

// now we insert the message into our header, only either prepend or append will work, can't have both
header.prepend('message'); // prepend adds the element as the first child of the header element
header.append('message'); // this will add the element as the last child of the header element (will be displayed over prepend, prepend won't exist)

// inserting multiple copies of the same element
header.append(message.cloneNode(true)); //  will display cookie message in both places

// two more methods
header.before(message); // will insert before the header element, also as a sibling
header.after(message); // will insert after the header element, also as a sibling

// deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  }); // when the Got it! button is clicked the element goes away

// instead of using message.remove() this is the old way below:
message.parentElement.removeChild(message); // does the same thing as line 48, this is called DOM traversing
