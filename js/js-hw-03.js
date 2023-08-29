"use strict";
//--------------------------------------------//
//------------AUTOCHECK-TASK-03/41------------//
//--------------------------------------------//

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

//--------------------------------------------//
//------------AUTOCHECK-TASK-04/41------------//
//--------------------------------------------//

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

//--------------------------------------------//
//------------AUTOCHECK-TASK-05/41------------//
//--------------------------------------------//

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];
// // Change code above this line

// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);

//--------------------------------------------//
//------------AUTOCHECK-TASK-06/41------------//
//--------------------------------------------//

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.owner.name);
// console.log(apartment.tags);

//--------------------------------------------//
//------------AUTOCHECK-TASK-07/41------------//
//--------------------------------------------//

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// };

// console.log(apartment.area);
// console.log(apartment.imgUrl);
// console.log(apartment.location.city);

//--------------------------------------------//
//------------AUTOCHECK-TASK-08/41------------//
//--------------------------------------------//

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

// console.log(product.name);
// console.log(product.price);
// console.log(product.image);
// console.log(product.tags);

//--------------------------------------------//
//------------AUTOCHECK-TASK-09/41------------//
//--------------------------------------------//

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };

// console.log(credentials.email);
// console.log(credentials.password);

//--------------------------------------------//
//------------AUTOCHECK-TASK-10/41------------//
//--------------------------------------------//

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (let key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

//----------------------------------------------------------//
//------------AUTOCHECK-TASK-11noCorrectCheck/41------------//
//----------------------------------------------------------//

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// console.log(apartment); //{descr: 'Spacious apartment in the city center', rating: 4, price: 2153}
// console.log(apartment.service); //apt

// for (const key in apartment) {
//   // Change code below this line
//   keys.push(key);
//   values.push(apartment[key]);
//   // Change code above this line
// }

// console.log(keys); //(4) ['descr', 'rating', 'price', 'service']
// console.log(values); //(4) ['Spacious apartment in the city center', 4, 2153, 'apt']

//--------------------------------------------------------//
//------------AUTOCHECK-TASK-11correctCheck/41------------//
//--------------------------------------------------------//

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// console.log(apartment); //{descr: 'Spacious apartment in the city center', rating: 4, price: 2153}
// console.log(apartment.service); //apt

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }

// console.log(keys); //['descr', 'rating', 'price']
// console.log(values); //['Spacious apartment in the city center', 4, 2153]

// //note the difference for keys and values consts in compare with previous "11noCorrectCheck/41" task

//--------------------------------------------//
//------------AUTOCHECK-TASK-12/41------------//
//--------------------------------------------//

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   const objectKeys = Object.keys(object);
//   propCount = objectKeys.length;
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//--------------------------------------------//
//------------AUTOCHECK-TASK-13/41------------//
//--------------------------------------------//

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

//--------------------------------------------------//
//------------AUTOCHECK-TASK-14before/41------------//
//--------------------------------------------------//

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//---------------------------------------------//
//------------AUTOCHECK-TASK-14a/41------------//
//---------------------------------------------//

// function countProps(object) {
//   // Change code below this line
//   const propCount = Object.keys(object).length;

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//---------------------------------------------//
//------------AUTOCHECK-TASK-14b/41------------//
//---------------------------------------------//

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);

//   for (const key of keys) {
//     propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//--------------------------------------------//
//------------AUTOCHECK-TASK-15/41------------//
//--------------------------------------------//

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

//--------------------------------------------//
//------------AUTOCHECK-TASK-16/41------------//
//--------------------------------------------//

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const salariesArray = Object.values(salaries);
//   for (const salary of salariesArray) {
//     totalSalary += salary;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

//--------------------------------------------//
//------------AUTOCHECK-TASK-17/41------------//
//--------------------------------------------//

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

//--------------------------------------------//
//------------AUTOCHECK-TASK-18/41------------//
//--------------------------------------------//

// const products = [
//   {
//     name: "Radar",
//     price: 1300,
//     quantity: 4,
//   },
//   {
//     name: "Scanner",
//     price: 2700,
//     quantity: 3,
//   },
//   {
//     name: "Droid",
//     price: 400,
//     quantity: 7,
//   },
//   {
//     name: "Grip",
//     price: 1200,
//     quantity: 9,
//   },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   let productPrice = null;
//   for (const product of products) {
//     if (product.name === productName) {
//       productPrice = product.price;
//       break;
//     }
//   }
//   return productPrice;
//   // Change code above this line
// }

// console.log(getProductPrice("Smartwatch"));
// console.log(getProductPrice("Droid"));
// console.log(getProductPrice("radar"));
// console.log(getProductPrice("Scanner"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-19/41------------//
//--------------------------------------------//

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const propNameArray = [];
//   for (const product of products) {
//     if (product[propName]) {
//       //product[propName] is for object key here
//       propNameArray.push(product[propName]);
//       //product[propName] is for object value here
//     }
//   }
//   return propNameArray;
//   // Change code above this line
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("category"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-20/41------------//
//--------------------------------------------//

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//   let totalPrice = 0;
//   for (const product of products) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//       break;
//     }
//   }
//   return totalPrice;
//   // Change code above this line
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));

//--------------------------------------------------//
//------------AUTOCHECK-TASK-21before/41------------//
//--------------------------------------------------//

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

//---------------------------------------------//
//------------AUTOCHECK-TASK-21a/41------------//
//---------------------------------------------//

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const highTemperaturesStatistis = Object.values(highTemperatures);
// let totalValue = 0;
// for (const value of highTemperaturesStatistis) {
//   totalValue += value;
// }

// const meanTemperature = totalValue / highTemperaturesStatistis.length;
// console.log(meanTemperature);

//---------------------------------------------//
//------------AUTOCHECK-TASK-21b/41------------//
//---------------------------------------------//

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

//--------------------------------------------//
//------------AUTOCHECK-TASK-22/41------------//
//--------------------------------------------//

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

//--------------------------------------------//
//------------AUTOCHECK-TASK-23/41------------//
//--------------------------------------------//

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(meanTemperature);

//--------------------------------------------//
//------------AUTOCHECK-TASK-24/41------------//
//--------------------------------------------//

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

//--------------------------------------------//
//------------AUTOCHECK-TASK-25/41------------//
//--------------------------------------------//

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

// console.log(
//   highToday,
//   lowToday,
//   todayIcon,
//   highTomorrow,
//   lowTomorrow,
//   tomorrowIcon
// );

//--------------------------------------------//
//------------AUTOCHECK-TASK-26/41------------//
//--------------------------------------------//

// // Change code below this line
// const forecast = {
//   today: {
//     low: 10,
//     high: 20,
//   },
//   tomorrow: {
//     low: 20,
//     high: 30,
//   },
// };

// // variant 1
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

// // variant 2
// //    function calculateMeanTemperature({
// //   today: { low: todayLow, high: todayHigh },
// //   tomorrow: { low: tomorrowLow, high: tomorrowHigh },
// // })

//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature(forecast));

//--------------------------------------------//
//------------AUTOCHECK-TASK-27/41------------//
//--------------------------------------------//

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

//--------------------------------------------//
//------------AUTOCHECK-TASK-28/41------------//
//--------------------------------------------//

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];

// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(bestScore);
// console.log(worstScore);

//--------------------------------------------//
//------------AUTOCHECK-TASK-29/41------------//
//--------------------------------------------//

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);

//--------------------------------------------//
//------------AUTOCHECK-TASK-30/41------------//
//--------------------------------------------//

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   const defaultObject = {
//     category,
//     priority,
//     completed,
//   };
//   const finalObject = { ...defaultObject, ...data };
//   return finalObject;
//   // Change code above this line
// }
// console.log(makeTask());
// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );
// console.log(
//   makeTask({
//     category: "Finance",
//     text: "Take interest",
//   })
// );
// console.log(
//   makeTask({
//     text: "Buy bread",
//   })
// );

//--------------------------------------------//
//------------AUTOCHECK-TASK-31/41------------//
//--------------------------------------------//

// function add(...args) {
//   let sum = null;
//   for (const arg of args) {
//     sum += arg;
//   }
//   return sum;
// }

// console.log(add(1, 2));
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4));
// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//--------------------------------------------//
//------------AUTOCHECK-TASK-32/41------------//
//--------------------------------------------//

// // Change code below this line
// function addOverNum(checkNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > checkNumber) {
//       total += arg;
//     }
//   }
//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

//--------------------------------------------//
//------------AUTOCHECK-TASK-33/41------------//
//--------------------------------------------//

// // Change code below this line
// function findMatches(checkArray, ...args) {
//   const matches = []; // Don't change this line

//   for (const arg of args) {
//     if (checkArray.includes(arg)) {
//       matches.push(arg);
//     }
//   }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

//--------------------------------------------//
//------------AUTOCHECK-TASK-34/41------------//
//--------------------------------------------//

// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-35/41------------//
//--------------------------------------------//

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//     console.log(`Updating book ${oldName} to ${newName}`);
//     return this.books;
//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-37/41------------//
//--------------------------------------------//

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());

//--------------------------------------------//
//------------AUTOCHECK-TASK-38/41------------//
//--------------------------------------------//

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//     if (this.potions.includes(potionName)) {
//       return `Error! Potion "${potionName}" is already in your inventory!`;
//     }
//     this.potions.push(potionName);
//     return this.potions;
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.addPotion("Stone skin"));
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log(atTheOldToad.addPotion("Power potion"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-39/41------------//
//--------------------------------------------//

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//     if (potionIndex === -1) {
//       return `Error! Potion "${potionName}" is not in inventory!`;
//     }
//     this.potions.splice(potionIndex, 1);
//     return this.potions;
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.removePotion("Invisibility"));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-40/41------------//
//--------------------------------------------//

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(oldName);
//     if (potionIndex === -1) {
//       return `Error! Potion "${oldName}" is not in inventory!`;
//     }
//     this.potions.splice(potionIndex, 1, newName);
//     return this.potions;
//     // Change code above this line
//   },
// };

// console.log(atTheOldToad.updatePotionName("Invisibility", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-41/41------------//
//--------------------------------------------//

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   //Change code below this line

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion "${newPotion.name}" is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//     return this.potions;
//   },

//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         const potionIndex = this.potions.indexOf(potion);
//         this.potions.splice(potionIndex, 1);
//         return this.potions;
//       }
//     }
//     return `Potion "${potionName}" is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//         return this.potions;
//       }
//     }
//     return `Potion "${oldName}" is not in inventory!`;
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion({ name: "Speed potion", price: 460 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 780 }));
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));

// console.log(atTheOldToad.removePotion("Invisibility"));
// console.log(atTheOldToad.removePotion("Stone skin"));
// console.log(atTheOldToad.removePotion("Dragon breath"));

// console.log(atTheOldToad.updatePotionName("Invisibility", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability"));
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));

//------------------------------------------------------//
//------------AUTOCHECK-TASK-41additional/41------------//
//------------------------------------------------------//
// function updatePotion was added in addition to updatePotionName in task #41

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   //Change code below this line

//   updatePotion(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName.name) {
//         const potionIndex = this.potions.indexOf(potion);
//         this.potions.splice(potionIndex, 1, newName);
//         return this.potions;
//       }
//     }
//     return `Error! Potion "${oldName.name}" is not in inventory!`;
//   },

//   // Change code above this line
// };

// console.log(
//   atTheOldToad.updatePotion(
//     { name: "Invisibility", price: 620 },
//     { name: "Polymorth", price: 780 }
//   )
// );

// console.log(
//   atTheOldToad.updatePotion(
//     { name: "Stone skin", price: 520 },
//     { name: "Invulnerability", price: 920 }
//   )
// );

// console.log(
//   atTheOldToad.updatePotion(
//     { name: "Dragon breath", price: 780 },
//     { name: "Polymorth", price: 780 }
//   )
// );
