'use strict';

// check if a give string is a palindrome

const palindrome1 = 'dad';
const palindrome2 = 'hello';

const words = palindrome1.split('');
const word2 = palindrome2.split('');
// console.log(words[1]);
// console.log(words);

for (let i = 2; i >= 0; i--) {
  console.log(words[i]);
  i.join();
  // console.log(word2[i]);
}

console.log(words);
