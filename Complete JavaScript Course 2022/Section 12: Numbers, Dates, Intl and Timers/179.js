'use strict';

const num = 3884764.23;

console.log('US: ', new Intl.NumberFormat('en-US').format(num)); // output is number with commas as separators
console.log('Germany: ', new Intl.NumberFormat('de-DE').format(num)); // separator is . and , for decimal point
console.log('Syria: ', new Intl.NumberFormat('ar-SY').format(num)); // arabic numbers
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);

// using units to do other formatting
const options = {
  style: 'unit', // can also have 'percent', 'currency'
  unit: 'mile-per-hour', // can substitute other units like 'celsius', etc.
};
console.log('US: ', new Intl.NumberFormat('en-US', options).format(num)); // will output the number with mph at the end

// using currency in the options object
const options2 = {
  style: 'currency',
  unit: 'celsius', // this will be ignored since our style is currency
  currency: 'EUR', // currency is not determined by locale must be defined
  useGrouping: false, // will get rid of grouping
};
console.log('US: ', new Intl.NumberFormat('en-US', options2).format(num)); // will display the euro sign
