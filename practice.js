let name = "Peter";
let age = 16;
let isStudent = true;

//boolean
console.log("Name:", name, "| Type:", typeof name);
console.log("Age:", age, "| Type:", typeof age);
console.log("Is Student:", isStudent,"| Type:", typeof isStudent);

//Arrays
let shoppingList = ["Rice", "Beans", "Milk", "Bread"];
console.log("Shopping List:", shoppingList);
console.log("typeof shoppingList:", typeof shoppingList);

//arithmetic operators
let num1 = 15;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//remainder
console.log(17 % 5);

let price = 1500;
let discount = 200;
let finalPrice = price - discount;
console.log("Final Price", finalPrice);

//comparison operators
let a = 10;
let b = "10";

/* This only prints the result true, false 
This prints with label and result
With this you can easily tell which output corresponds to which comparison 
*/

console.log("a == b:", a == b);
console.log("a === b:", a === b);

let score = 75;
console.log("score >= 50:", score >= 50);

//logical operators
let hasTicket = true;
let hasID = false;

console.log("Can enter (needs both):", hasTicket && hasID);
console.log("Can enter (needs just one):", hasTicket ||hasID);

//mini projects
let password = "1234";
let correctPassword = "1234";

console.log("Password matches:", password  === correctPassword);

let budget = 5000;
let itemPrice = 1200;

let canBuyItem = (itemPrice <= budget) && (budget > 0);
console.log("Item is affordable AND budget > 0:", canBuyItem);