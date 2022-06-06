'use strict';

// DOMContentLoaded: event is fired by the document as soon as the HTML is completely parsed (HTML has been downloaded and been converted to the DOM tree). Does not wait for images and other external resources to load, just HTML and JS need to be loaded. Allows us to execute code AFTER the DOM is available.

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

// we don't need to wrap our entire code inside the DOMContentLoaded b/c we already have our javascript at the bottom of our HTML in the <script></script> element.

// load event: fired by the window as soon as the HTML, images, external resources (CSS) have been parsed. Basically when the entire page has finished loading.

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// beforeunload event:also gets fired on window, created immediately before the user is about to leave a page. Helpful to ask users if they want to leave a page. Might need to call preventDefault() on some browsers. Will only display a default popup, can no longer change it. Pretty intrusive feature.

window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});
