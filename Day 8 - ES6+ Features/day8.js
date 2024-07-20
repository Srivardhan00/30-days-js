// Day 8: ES6+ Features

// Tasks/Activities:

// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "Ghost",
  age = 20;
let str = `Hi ${name}, Happy ${age}!`;
console.log(str); // Hi Ghost, Happy 20!

// Task 2: Create a multi-line string using template literals and log it to the console.
str = `It is July
It is ${age}
It is saturday
`;
console.log(str);
/*
Output :
It is July
It is 20
It is saturday

*/

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let arr = [2, 3, 4, 1];
let [a, b] = arr; // first and second element
console.log(a, b); // 2 3

[a, , b] = arr; // first and third element [ skipped second with comma]
console.log(a, b); // 2 4

[a, b, ...rest1] = arr; // first, second and remaining
// Rest element must be last element
console.log(a, b, rest1); // 2 3 [ 4, 1 ]

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let obj = {
  title: "First Book",
  author: "First Author",
  year: 2022,
};

let { title: title1, author: author1 } = obj;
console.log(title1, author1); // First Book First Author

const { title, author, ...rest } = obj;
console.log(title, author, rest); // First Book First Author { year: 2022 }

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

let newArray = [...arr, 3, 4, 45];
console.log(newArray);
/*
Output :
[
  2, 3,  4, 1,
  3, 4, 45
]
*/

newArray = [...arr, [3, 4, 5]];
console.log(newArray); // [ 2, 3, 4, 1, [ 3, 4, 5 ] ]

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function addAll(...elements) {
  return (sum = elements.reduce(function (x, y) {
    return x + y;
  }, 0));
}

console.log(addAll(arr)); // 10

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
const prod = (a, b = 1) => a * b;
console.log(prod(7, 5)); // 35
console.log(prod(3)); // 3

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
const person = {
  name: "John Doe",
  age: 30,
  address: "123 Main Street",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};
console.log(person);
/*
Output :
{
  name: 'John Doe',
  age: 30,
  address: '123 Main Street',
  greet: [Function: greet]
}
*/

// Task 9: Create an object with computed property names based on variables and log the object to the console.
const prop1 = "country";
const prop2 = "city";
const getLocation = function () {
  return this[prop2]; // or this.city
};

// Create an object with computed property names
const location = {
  [prop1]: "USA", // country: "USA"
  [prop2]: "New York", // city: "New York"
  getLocation,
};
console.log(location); // { country: "USA", city: "New York", getLocation: [Function: getLocation]}
console.log(location.getLocation()); // New York
