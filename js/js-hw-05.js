"use strict";
//--------------------------------------------//
//------------AUTOCHECK-TASK-01/20------------//
//--------------------------------------------//

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// console.log(pizzaPalace.checkPizza("Smoked"));
// console.log(pizzaPalace.order("Margaritta"));
// console.log(pizzaPalace.order("Four meats"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-02/20------------//
//--------------------------------------------//

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

//--------------------------------------------//
//------------AUTOCHECK-TASK-03/20------------//
//--------------------------------------------//

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map((order) => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map((order) => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter((order) => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("jacob@hotmail.com"));
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-04/20------------//
//--------------------------------------------//

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(child.hasOwnProperty("name"));
// console.log(child.hasOwnProperty("heritage"));
// console.log(child.age);

//--------------------------------------------//
//------------AUTOCHECK-TASK-05/20------------//
//--------------------------------------------//

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line

// console.log(child.heritage); // property from prototype of prototype
// console.log(child.surname); // property from prototype
// console.log(child.age); // own property

// console.log(ancestor.isPrototypeOf("parent"));
// console.log(parent.isPrototypeOf("child"));

//--------------------------------------------//
//------------AUTOCHECK-TASK-07/20------------//
//--------------------------------------------//

// class Car {
//   // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// const audi = new Car("Audi", "Q3", 36000);
// console.log(audi);

// const bmw = new Car("BMW", "X5", 58900);
// console.log(bmw);

//--------------------------------------------//
//------------AUTOCHECK-TASK-08/20------------//
//--------------------------------------------//

// class Car {
//   // Change code below this line
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// const audi = new Car({
//   brand: "Audi",
//   model: "Q3",
//   price: 36000,
// });
// console.log(audi);

// const bmw = new Car({
//   brand: "BMW",
//   model: "X5",
//   price: 58900,
// });
// console.log(bmw);

//--------------------------------------------//
//------------AUTOCHECK-TASK-09/20------------//
//--------------------------------------------//

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
//   // Change code above this line
// }

// const audi = new Car({
//   brand: "Audi",
//   model: "Q3",
//   price: 36000,
// });

// audi.changePrice(41500);
// console.log(audi.getPrice());

//--------------------------------------------//
//------------AUTOCHECK-TASK-10/20------------//
//--------------------------------------------//

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     const itemToRemoveIndex = this.items.indexOf(itemToRemove);
//     this.items.splice(itemToRemoveIndex, 1);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//--------------------------------------------//
//------------AUTOCHECK-TASK-11/20------------//
//--------------------------------------------//

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }

//   getValue() {
//     return this.value;
//   }

//   padStart(str) {
//     this.value = str + this.value;
//   }

//   padEnd(str) {
//     this.value += str;
//   }

//   padBoth(str) {
//     this.value = str + this.value + str;
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//--------------------------------------------//
//------------AUTOCHECK-TASK-12/20------------//
//--------------------------------------------//

// class Car {
//   // Change code below this line
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
//   // Change code above this line
// }

// const audi = new Car({
//   brand: "Audi",
//   model: "Q3",
//   price: 36000,
// });

// console.log(audi);
// console.log(audi.#brand); //error will occur since #brand is private property of class Car
// console.log(audi.model);
// console.log(audi.getBrand());
// audi.changeBrand("Volkswagen");
// console.log(audi.getBrand());

//--------------------------------------------//
//------------AUTOCHECK-TASK-13/20------------//
//--------------------------------------------//

// class Storage {
//   // Change code below this line
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter((item) => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

//--------------------------------------------//
//------------AUTOCHECK-TASK-14/20------------//
//--------------------------------------------//

// class StringBuilder {
//   // Change code below this line
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

//--------------------------------------------------//
//------------AUTOCHECK-TASK-15before/20------------//
//--------------------------------------------------//

// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }

//   getModel() {
//     return this.#model;
//   }

//   updateModel(newModel) {
//     this.#model = newModel;
//   }

//   getPrice() {
//     return this.#price;
//   }

//   setPrice(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const bmw = new Car({
//   brand: "Audi",
//   model: "Q3",
//   price: 36000,
// });

// console.log(bmw);
// bmw.changeBrand("BMW");
// console.log(bmw.getBrand());
// bmw.updateModel("X5");
// console.log(bmw.getModel());
// bmw.setPrice(60000);
// console.log(bmw.getPrice());
// console.log(bmw);

//--------------------------------------------------//
//------------AUTOCHECK-TASK-15after/20-------------//
//--------------------------------------------------//

// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const bmw = new Car({
//   brand: "Audi",
//   model: "Q3",
//   price: 36000,
// });

// console.log(bmw);
// bmw.brand = "BMW";
// console.log(bmw.brand);
// bmw.model = "X5";
// console.log(bmw.model);
// bmw.price = 60000;
// console.log(bmw.price);
// console.log(bmw);

//--------------------------------------------//
//------------AUTOCHECK-TASK-16/20------------//
//--------------------------------------------//

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//--------------------------------------------//
//------------AUTOCHECK-TASK-17/20------------//
//--------------------------------------------//

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     return price > this.#MAX_PRICE
//       ? `"Error! Price exceeds the maximum"`
//       : `"Success! Price is within acceptable limits"`;
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// // other variant of checkPrice(price) method //

//   static checkPrice(price) {
//     if (price > this.#MAX_PRICE) {
//       return `"Error! Price exceeds the maximum"`;
//     }
//     return `"Success! Price is within acceptable limits"`;
//   }

//----------------------------------------------------//
//------------AUTOCHECK-TASK-18modified/20------------//
//----------------------------------------------------//

// //The following code is attempting to define a User
// //class with a getter and a setter for the email property.
// //However, there's a naming conflict between the property
// //and the getter / setter methods.
// //To resolve this issue, a slightly different naming
// //convention for the private property and the getter / setter
// //methods need to be used.
// //Here's the example: this._email = email;

// //I have change email property from public to private instead

// class User {
//   #email;
//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// // Change code below this line

// class Admin extends User {
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// }

// console.log(Admin.AccessLevel.BASIC);
// console.log(Admin.AccessLevel.SUPERUSER);

// const first = new Admin("first.admin@goooooogle.com");
// console.log(first);
// console.log(first.email);
// first.email = "first@goooooogle.com";
// console.log(first.email);

//--------------------------------------------//
//------------AUTOCHECK-TASK-19/20------------//
//--------------------------------------------//

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

//--------------------------------------------//
//------------AUTOCHECK-TASK-20/20------------//
//--------------------------------------------//

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   blacklistedEmails = [];

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklist(email) {
//     return this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
