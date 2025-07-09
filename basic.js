// import { useName } from "./data.js";
// This is a basic JavaScript file demonstrating variable declaration, conditionals, functions, loops, and arrays.
// It includes examples of using var, let, and const for variable declarations, as well as
// conditionals, functions, loops, and arrays.

// const data = require("./data.js"); // Importing data from data.js
// console.log("Data from data.js:", data);

const {userName} = require("./data.js"); // Importing userName from data.js
console.log("User Name from data.js:", userName);

// var a = 10 ; //this scope in function level
// let b = 20; //this scope in block level

// const c = 30; //this scope in block level
// console.log(a + b + c);

// b = 100;
// a = 200;
// // c = 300; // This will throw an error because c is a constant
// console.log(a+b);

// //condition

// if (a==200) {
//     console.log("Value of a is 200");
    
// } else if (a == 100) {
//     console.log("Value of a is 100");
// }
// else {
//     console.log("Value of a is not 200");
// }

// //function 

// function fruit(item) {
//     console.log("fruit name is " + item);
// }

// console.log("Calling fruit function:");
// fruit("Apple");
// console.log("Calling fruit function:");
// fruit("Banana");

// //Loop

// // for (var a = 10; a <= 20; a++) {
// //     console.log("Value of a is: " + a);
// // }

// var a = 10; // Using var to declare a variable

// while (a <= 20) {
//     console.log("Value of a is: " + a);
//     a++;
// }

// //Array
// var fruits = ["Apple", "Banana", "Cherry", "Date"];
// console.log("Fruits in the array:");
// for (var i = 0; i < fruits.length; i++) {
//     // console.log(fruits[i]);
//     console.log("Fruit at index " + i + " is: " + fruits[i]);
    
// }
// var user = {
//     name: "John Doe",
//     age: 30,
//     email: "adis6469@gmail.com"
// }  

// console.log("User details:");