'use strict';

const now = new Date();
const day = `${now.getDate()}`.padStart(2, 0);
const month = now.getMonth();
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();
labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

////////////////////////////////////////////////////////////////////////////

// experimenting with the API, use ISO language table to get other codes
const now2 = new Date();
labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now); // 'en-US' is the locale string, language-country; you pass in now to format for current date
labelDate.textContent = new Intl.DateTimeFormat('en-GB').format(now); // will keep english but with a different date format month/day/year vs day/month/year
labelDate.textContent = new Intl.DateTimeFormat('ar-SY').format(now); // can do other languages, arabic syria

// adding time to the date
const options = {
  hour: 'numeric',
  minute: 'numeric',
};
// provide the options object as a second part of the .DateTimeFormat option
labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now); // we get the time but the date is gone, need to add each property to the object

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', // will display full month name i.e. August; can also have '2-digit' to display two digit month
  year: 'numeric',
  weekday: 'long', // can also use 'short' or 'narrow'
};

// instead of manually setting the location you can utilize the browser to get it
const locale = navigator.language;
console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now); // set automatically to browser's locale

///////////////////////////////////
// putting it all together
const now = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
};
const locale = navigator.language;

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
