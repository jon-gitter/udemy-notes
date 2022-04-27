'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// using forEach on a map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`); // output is USD: United States Dollar EUR: Euro GBP: Pound sterling
});

// using forEach on a set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique); // will only display the unique values (USD, GBP, EUR)
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${key}: ${value}`); // output is USD: USD GBP: GBP EUR: EUR, this is b/c a set doesn't have keys or indexes therefore there is no value that would make sense for the key (second argument); the key in the parameters doesn't have to be there so we use _ as a throw away variable
});
