// Day 5: Functions
// Tasks/Activities:

// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function evenOrOdd(a) {
  if (a % 2 === 1) {
    console.log(`${a} is odd`);
  } else {
    console.log(`${a} is even`);
  }
}
evenOrOdd(9);
evenOrOdd(88);

// Task 2: Write a function to calculate the square of a number and return the result.
function square(n) {
  return n * n;
}
let a = 8;
console.log(`Square of ${a} is ${square(a)}`);

// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = (a, b) => {
  console.log(`Max of ${a},${b} is ${Math.max(a, b)}`);
};
findMax(9, 7);

// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenate = (s1, s2) => {
  return s1 + s2;
};
console.log(concatenate("hello ", "world!"));

// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const add = (a, b) => a + b;
console.log(add(5, 4));

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const check = (s, c) => s.includes(c);
let str = "hello",
  ch = "a";
console.log(`${str} contains ${ch} : ${check(str, ch)}`);

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
const prod = (a, b = 1) => {
  return a * b;
};
console.log(prod(7, 5));
console.log(prod(3));

// Task 8: Write a function that takes a person’s name and age and returns a greeting message. Provide a default value for the age.
const greet = (name, age = 90) => {
  return `Hi ${name}, You're ${age} ?`;
};
console.log(greet("person"));
console.log(greet("person2", 25));

// Activity 5: Higher-Order Functions

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function sayHello() {
  console.log("hello!");
}
const hof1 = (b, sayHello) => {
  while (b > 0) {
    sayHello();
    b--;
  }
};
hof1(5, sayHello);

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const add5 = (a) => a + 5;
const print = (a) => {
  console.log(a);
};

const hof2 = (value, transformFn, processFn) => {
  const transformedValue = transformFn(value); // Apply the first function to the value
  processFn(transformedValue); // Apply the second function to the transformed value
};
hof2(3, add5, print);
