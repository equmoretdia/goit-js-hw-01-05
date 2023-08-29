"use strict";
//--------------------------------------------//
//------------AUTOCHECK-TASK-01/32------------//
//--------------------------------------------//

// function checkAge(age) {
//   if (age >= 18) {
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(17));
// console.log(checkAge(18));
// console.log(checkAge(44));

//--------------------------------------------//
//------------AUTOCHECK-TASK-02/32------------//
//--------------------------------------------//

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("Jqueryismyjam"));
// console.log(checkPassword("jqueryismyjam"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-03/32------------//
//--------------------------------------------//

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }

//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
//   // Change code above this line
// }

// console.log(checkStorage(100, 100));
// console.log(checkStorage(150, 0));
// console.log(checkStorage(200, 300));
// console.log(checkStorage(120, 80));

//--------------------------------------------//
//------------AUTOCHECK-TASK-05/32------------//
//--------------------------------------------//

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

//--------------------------------------------//
//------------AUTOCHECK-TASK-06/32------------//
//--------------------------------------------//

// const fruits = ["apple", "plum", "pear", "orange"];

// console.log(fruits);

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);

//--------------------------------------------//
//------------AUTOCHECK-TASK-07/32------------//
//--------------------------------------------//

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

//--------------------------------------------//
//------------AUTOCHECK-TASK-08/32------------//
//--------------------------------------------//

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElement = fruits[fruits.length - 1];

// console.log(lastElement);

//--------------------------------------------//
//------------AUTOCHECK-TASK-09/32------------//
//--------------------------------------------//

// function getExtremeElements(array) {
//   // Change code below this line
//   const extremeElementsArray = [array[0], array[array.length - 1]];

//   return extremeElementsArray;

//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));

//--------------------------------------------//
//------------AUTOCHECK-TASK-10/32------------//
//--------------------------------------------//

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// console.log(splitMessage("Mango hurries to the train", " "));
// console.log(splitMessage("Mango", ""));
// console.log(splitMessage("best_for_week", "_"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-11/32------------//
//--------------------------------------------//

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const engravingWordsArray = message.split(" ");
//   const totalPrice = engravingWordsArray.length * pricePerWord;

//   return totalPrice;

//   // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));

//--------------------------------------------//
//------------AUTOCHECK-TASK-12/32------------//
//--------------------------------------------//

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimiter);

//   // Change code above this line
//   return string;
// }

// console.log(
//   makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")
// );
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], ""));
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-13/32------------//
//--------------------------------------------//

// function slugify(title) {
//   // Change code below this line
//   const normalizedTitle = title.toLowerCase();
//   const slugArray = normalizedTitle.split(" ");
//   const slug = slugArray.join("-");

//   return slug;
//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));
// console.log(slugify("English for developer"));
// console.log(slugify("Ten secrets of JavaScript"));
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-14/32------------//
//--------------------------------------------//

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

//--------------------------------------------//
//------------AUTOCHECK-TASK-15/32------------//
//--------------------------------------------//

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);

// console.log(allClients);

//--------------------------------------------//
//------------AUTOCHECK-TASK-16/32------------//
//--------------------------------------------//

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const sumArray = firstArray.concat(secondArray);

//   if (sumArray.length > maxLength) {
//     const reducedArray = sumArray.slice(0, maxLength);
//     return reducedArray;
//   }

//   return sumArray;
//   // Change code above this line
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));

//---------------------------------------------//
//------------AUTOCHECK-TASK-17M/32------------//
//---------------------------------------------//

// function numberRow(start, end) {
//   for (let i = start; i <= end; i += 1) {
//     console.log(i);
//   }
// }

// numberRow(3, 7);
// numberRow(-5, 11);
// numberRow(8, 22);

//--------------------------------------------//
//------------AUTOCHECK-TASK-18/32------------//
//--------------------------------------------//

// function calculateTotal(number) {
//   // Change code below this line
//   let sum = 0;

//   for (let i = 1; i <= number; i += 1) {
//     sum += i;
//   }

//   return sum;
//   // Change code above this line
// }

// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(7));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));

//--------------------------------------------//
//------------AUTOCHECK-TASK-19/32------------//
//--------------------------------------------//

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

//--------------------------------------------//
//------------AUTOCHECK-TASK-20/32------------//
//--------------------------------------------//

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//--------------------------------------------//
//------------AUTOCHECK-TASK-21/32------------//
//--------------------------------------------//

// function findLongestWord(string) {
//   // Change code below this line
//   let longestWordArray = string.split(" ");
//   let longestWord = "";

//   for (let i = 0; i < longestWordArray.length; i += 1) {
//     if (longestWord.length < longestWordArray[i].length) {
//       longestWord = longestWordArray[i];
//     }
//   }

//   return longestWord;
//   // Change code above this line
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
// console.log(findLongestWord("yellow flower grows on the green field"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-22/32------------//
//--------------------------------------------//

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers(-5, 2));

//--------------------------------------------//
//------------AUTOCHECK-TASK-23/32------------//
//--------------------------------------------//

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   return filteredNumbers;

//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([7, 44, 18, 91, 76], 80));

//---------------------------------------------//
//------------AUTOCHECK-TASK-24M/32------------//
//---------------------------------------------//

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange", "banana"];

//   let availableFruit = fruits.includes(fruit.toLowerCase());

//   return availableFruit;
// }

// console.log(checkFruit("plum"));
// console.log(checkFruit("mandarin"));
// console.log(checkFruit("PeAr"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-25/32------------//
//--------------------------------------------//

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const commonElements = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     let commonElement = array2.includes(array1[i]);
//     if (commonElement) {
//       commonElements.push(array1[i]);
//     }
//   }

//   return commonElements;

//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

//--------------------------------------------//
//------------AUTOCHECK-TASK-26/32------------//
//--------------------------------------------//

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const orderItem of order) {
//     total += orderItem;
//   }

//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([-24, 85, -137, 76]));
// console.log(calculateTotalPrice([164, 48, 291]));

//--------------------------------------------//
//------------AUTOCHECK-TASK-27/32------------//
//--------------------------------------------//

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([7, 44, 18, 91, 76], 80));

//--------------------------------------------//
//------------AUTOCHECK-TASK-28/32------------//
//--------------------------------------------//

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a, b, c, d, e);

//--------------------------------------------//
//------------AUTOCHECK-TASK-29/32------------//
//--------------------------------------------//

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const evenNumbers = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }

//   return evenNumbers;
//   // Change code above this line
// }

// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(5, 5));
// console.log(getEvenNumbers(0, 0));
// console.log(getEvenNumbers(7, 24));

//---------------------------------------------//
//------------AUTOCHECK-TASK-30M/32------------//
//---------------------------------------------//

// function findNumber(start, end) {
//   let number;
//   for (let i = start; i < end; i += 1) {
//     if (i % 5 === 0) {
//       number = i;
//       break;
//     }
//   }

//   return number;
// }

// console.log(findNumber(6, 27));
// console.log(findNumber(15, 17));
// console.log(findNumber(19, 32));

// //in fact we don't need variable "number", we can work with "i" instead like in task 31/32 below

//--------------------------------------------//
//------------AUTOCHECK-TASK-31/32------------//
//--------------------------------------------//

// function findNumber(start, end, divisor) {
//   // Change code below this line

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   // Change code above this line
// }

// console.log(findNumber(7, 27, 3));
// console.log(findNumber(9, 16, 7));
// console.log(findNumber(14, 41, 11));

//--------------------------------------------//
//------------AUTOCHECK-TASK-32/32------------//
//--------------------------------------------//

// function includes(array, value) {
//   // Change code below this line
//   let availabilityCheck;
//   for (const arrayElement of array) {
//     if (arrayElement === value) {
//       availabilityCheck = true;
//       break;
//     }
//     availabilityCheck = false;
//   }
//   return availabilityCheck;
//   // Change code above this line
// }

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// );
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// );
