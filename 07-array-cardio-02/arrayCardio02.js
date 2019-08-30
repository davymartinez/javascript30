/* eslint-disable no-console */
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
// using arrow function
let checkSome = people.some(p => (new Date()).getFullYear() - p.year >= 19);
// using callback function
// let checkSome = people.some(function(people) {
//   let currentYear = (new Date()).getFullYear();
//   if ((currentYear - people.year) >= 19) {
//     return true;
//   }
// });
console.log(checkSome);

// Array.prototype.every() // is everyone 19 or older?
// using arrow function
let checkEvery = people.every(p => (new Date()).getFullYear() - p.year >= 19);
// using callback function
// let checkEvery = people.every(function(people) {
//   let currentYear = (new Date()).getFullYear();
//   if ((currentYear - people.year) >= 19) {
//     return true;
//   }
// });
console.log(checkEvery);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
let findID = comments.find(comment => comment.id == 823423);
console.log(findID);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
let findIdx = comments.findIndex(comment => comment.id == 823423);
console.log(findIdx);