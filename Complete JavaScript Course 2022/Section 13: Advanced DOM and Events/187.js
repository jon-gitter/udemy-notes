'use strict';

const message = document.createElement('div');

// Styles
// setting a style on a element; message is a variable set in previous section
message.style.backgroundColor = '#37383d'; // sets the background color, must be in CSS format to work
message.style.width = '120%';

console.log(message.style.height); // this will output nothing, this is b/c it only works for inline styles we set for ourselves
console.log(message.style.backgroundColor); // will output the backgroundColor b/c we already set it as a inline style

// how to get styles whether they're inline or not
console.log(getComputedStyle(message)); // will output a HUGE object, will contain all of the properties with all of the values
console.log(getComputedStyle(message).color); // easier to just take one property, in this case .color, from getComputedStyle
console.log(getComputedStyle(message).height); // can also use .height

// we want to add height to the message
message.style.height = getComputedStyle(message).height + 40 + 'px'; // this won't work because we're trying to add a number to a string, we need to parse it

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; // need to parse out the number from the original getComputedStyle b/c it had px at the end

// CSS variables (CSS custom properties), lines 3-15 in style.css
document.documentElement.style.setProperty('--color-primary', 'orangered'); // will change the primary color we set in CSS, with setProperty you first pass in name of property and the value

//////////////// you can also use .setProperty() to set the background color or width, etc ///////////////////////////////

/////////////////////////////////

// Attributes
// in HTML src= , alt = , class =, id = are all attributes
// we can access and change attributes in JavaScript

// selecting the logo
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // output will be Bankist logo, the "alt =" of line 20 in index.html
console.log(logo.src); // output will be url of image, the "src =" of line 21 in index.html
console.log(logo.className); // will output nav__logo, the "class =" line 22 in index.html

// JavaScript can only read the standard properties in HTML, if we add one (see below) that isn't (line 23 in index.html), JavaScript can't create a property on the object
console.log(logo.designer); // will output undefined b/c designer is not a standard property to be found on images in HTML
console.log(logo.getAttribute('designer')); // this will allow us to get the "designer =" we normally couldn't with similar dot notation above

// setting attributes with JavaScript
logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist'); // sets a new attribute

// absolute and relative value for changing image source in HTML, ALSO USEFUL FOR "href = " on links
console.log(logo.src); // this will give us absolute value, i.e. http://127.0.0.1:8080/img/logo.png
console.log(logo.getAttribute('src')); // this will give us relative file name for the image, i.e. img/logo.png, THIS IS PREFERRED METHOD
// helpful with links as well
const link = document.querySelector('.nav__link--btn');
console.log(link.href); // absolute name, will output http://.....
console.log(link.getAttribute('href')); // will output relative name, i.e. #

// Data Attributes, from line 25 of index.html
console.log(logo.dataset.versionNumber); // output is 3.0, remember the camelCase for dot notation

///////////////////////////////////////////

// Classes, the below methods let us target specific classes without messing with all of them
logo.classList.add('c', 'j'); // fake class names, can add many class names
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes like in arrays

// DON'T use this
logo.className = 'jonas'; // this is NOT a preferred method, it will override all the existing classes
