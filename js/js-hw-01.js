"use strict";
//--------------------------------------------//
//------------AUTOCHECK-TASK-04/36------------//
//--------------------------------------------//

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;
// console.log(totalPrice); //14000

//--------------------------------------------//
//------------AUTOCHECK-TASK-05/36------------//
//--------------------------------------------//

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

//--------------------------------------------//
//------------AUTOCHECK-TASK-06/36------------//
//--------------------------------------------//

// // Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
// console.log(message);

//--------------------------------------------//
//------------AUTOCHECK-TASK-07/36------------//
//--------------------------------------------//

// // Change code below this line
// function sayHi() {
//   console.log("Hello, this is my first function!");
// }

// sayHi();

//--------------------------------------------//
//------------AUTOCHECK-TASK-08/36------------//
//--------------------------------------------//

// // Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

//--------------------------------------------//
//------------AUTOCHECK-TASK-09/36------------//
//--------------------------------------------//

// function add(a, b, c) {
//   // Change code below this line

//   return a + b + c;

//   // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

//--------------------------------------------//
//------------AUTOCHECK-TASK-10/36------------//
//--------------------------------------------//

// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }

// console.log(makeMessage("Radar", 6150));

//--------------------------------------------//
//------------AUTOCHECK-TASK-11/36------------//
//--------------------------------------------//

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

//--------------------------------------------//
//------------AUTOCHECK-TASK-12/36------------//
//--------------------------------------------//

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line

//   const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;

//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

//--------------------------------------------//
//------------AUTOCHECK-TASK-13/36------------//
//--------------------------------------------//

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }

// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

//--------------------------------------------//
//------------AUTOCHECK-TASK-14/36------------//
//--------------------------------------------//

// function isValidPassword(password) {
//   const SAVED_PASSWORD = "jqueryismyjam";
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }

// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwirul3z"));
// console.log(isValidPassword("jqueryismyjam"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-15/36------------//
//--------------------------------------------//

// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = "You are an adult";
//   } else {
//     message = "You are a minor";
//   }

//   return message;
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(37));

//--------------------------------------------//
//------------AUTOCHECK-TASK-16/36------------//
//--------------------------------------------//

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (available < ordered) {
//     message = "Not enough goods in stock!";
//   } else {
//     message = "Order is processed, our manager will contact you.";
//   }
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

//--------------------------------------------//
//------------AUTOCHECK-TASK-17/36------------//
//--------------------------------------------//

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a, b, c, d);

//--------------------------------------------//
//------------AUTOCHECK-TASK-18/36------------//
//--------------------------------------------//

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice;
//   totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     let customerRemainedCredits;
//     customerRemainedCredits = customerCredits - pricePerDroid * orderedQuantity;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerRemainedCredits} credits left`;
//   }
//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

//--------------------------------------------//
//------------AUTOCHECK-TASK-19/36------------//
//--------------------------------------------//

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;

//   if (password === null) {
//     // Change this line
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-20/36------------//
//--------------------------------------------//

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(170, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(20, 250));

//--------------------------------------------//
//------------AUTOCHECK-TASK-21/36------------//
//--------------------------------------------//

// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 20));
// console.log(isNumberInRange(20, 50, 76));

//--------------------------------------------//
//------------AUTOCHECK-TASK-22/36------------//
//--------------------------------------------//

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("free"));
// console.log(checkIfCanAccessContent("vip"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-23/36------------//
//--------------------------------------------//

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 20));
// console.log(isNumberNotInRange(20, 50, 76));

//--------------------------------------------//
//------------AUTOCHECK-TASK-24/36------------//
//--------------------------------------------//

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   // Change code above this line
//   return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

//--------------------------------------------//
//------------AUTOCHECK-TASK-25/36------------//
//--------------------------------------------//

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message =
//     ordered > available
//       ? "Not enough goods in stock!"
//       : "The order is accepted, our manager will contact you";
//   // Change code above this line
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(150, 150));
// console.log(checkStorage(150, 180));

//--------------------------------------------//
//------------AUTOCHECK-TASK-26/36------------//
//--------------------------------------------//

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message =
//     password === ADMIN_PASSWORD
//       ? "Access is allowed"
//       : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("jqueryismyjaM"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-27/36------------//
//--------------------------------------------//

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (type) {
//     case "starter":
//       price = 0;
//       break;

//     case "professional":
//       price = 20;
//       break;

//     case "organization":
//       price = 50;
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));

//--------------------------------------------//
//-----------AUTOCHECK-TASK-28A/36------------//
//--------------------------------------------//

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   switch (password) {
//     case null:
//       message = "Canceled by user!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Welcome!";
//       break;

//     default:
//       message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("Jqueryismyjam"));
// console.log(checkPassword("jqueryismyjam"));

//--------------------------------------------//
//-----------AUTOCHECK-TASK-28B/36------------//
//--------------------------------------------//

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   if (password === null) {
//     message = "Canceled by user!";
//   } else if (password === ADMIN_PASSWORD) {
//     message = "Welcome!";
//   } else {
//     message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("Jqueryismyjam"));
// console.log(checkPassword("jqueryismyjam"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-29/36------------//
//--------------------------------------------//

// function getShippingCost(country) {
//   let message;
//   let price;
//   // Change code below this line
//   switch (country) {
//     case "China":
//       price = 100;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Chile":
//       price = 250;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Australia":
//       price = 170;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     case "Jamaica":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   return message;
// }

// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-30/36------------//
//--------------------------------------------//

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-31/36------------//
//--------------------------------------------//

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);

//--------------------------------------------//
//------------AUTOCHECK-TASK-32/36------------//
//--------------------------------------------//

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// console.log(getSubstring("Hello world", 4));
// console.log(getSubstring("Hello world", 9));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

//--------------------------------------------//
//------------AUTOCHECK-TASK-33/36------------//
//--------------------------------------------//

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = `${message}`;
//   } else {
//     result = `${message.slice(0, maxLength)}...`;
//   }
//   /// Change code above this line
//   return result;
// }

// console.log(formatMessage("Veni, vidi, vici", 16));
// console.log(formatMessage("Veni, vidi, vici", 10));
// console.log(formatMessage("Veni, vidi, vici", 33));
// console.log(formatMessage("Veni, vidi, vici", 4));

//--------------------------------------------//
//------------AUTOCHECK-TASK-34/36------------//
//--------------------------------------------//

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();

//   return normalizedInput;
// }

// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-35/36------------//
//--------------------------------------------//

// function checkForName(fullName, name) {
//   const result = fullName.includes(name);
//   return result;
// }

// console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));
// console.log(checkForName("Egor Kolbasov", "Zhenya"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-36/36------------//
//--------------------------------------------//

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   const normalizedInput = message.toLowerCase();
//   result = normalizedInput.includes("spam") || normalizedInput.includes("sale");
//   // Change code above this line
//   return result;
// }

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));
