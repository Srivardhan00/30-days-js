// Day 15: Closures

// Tasks/Activities:

// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outer() {
  let val = 80;
  return function inner() {
    console.log(`The value in outer is`, val);
  };
}
const inner = outer();
inner();

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function ctr() {
  let count = 0;
  function increment() {
    count++;
    getValue();
  }
  function decrement() {
    count--;
    getValue();
  }
  function getValue() {
    console.log(`The count is ${count}`);
  }
  return { increment, decrement, getValue };
}

const counter = ctr();
counter.getValue();
counter.increment();
counter.increment();
counter.decrement();

// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function uniqueGenerator() {
  let id = 1;
  return (newId = () => {
    return id++;
  });
}
let uid = uniqueGenerator();

console.log(`New id is ${uid()}`);
console.log(`New id is ${uid()}`);
console.log(`New id is ${uid()}`);
console.log(`New id is ${uid()}`);

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function greet(name) {
  return () => {
    console.log(`Hi ${name}`);
  };
}

const greeting = greet("Everyone");
greeting();

// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function storeIndex(i) {
  return () => {
    console.log(`My index is `, i);
  };
}
let arr = [];
for (let index = 0; index < 5; index++) {
  arr.push(storeIndex(index));
}

// console.log(arr);
/**
[
  [Function (anonymous)],
  [Function (anonymous)],
  [Function (anonymous)],
  [Function (anonymous)],
  [Function (anonymous)]
]
 */

arr[2]();
arr[4]();

// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function createModule() {
  let arr = [];
  function addElement(ele) {
    arr.push(ele);
    console.log("Element Added");
  }
  function removeElement(val) {
    if (arr.indexOf(val) != -1) {
      arr.splice(arr.indexOf(val), 1);
      console.log("Element Found and Removed");
    } else {
      console.log("Element is not found");
    }
  }
  function print() {
    console.log(arr);
  }
  return { addElement, removeElement, print };
}
const m = createModule();
m.addElement(5);
m.addElement(50);
m.print();
m.removeElement(50);
m.removeElement(50);
m.print();

// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args); // Create a unique key for each set of arguments
    if (cache[key]) {
      console.log(`Fetching from cache: ${key}`);
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      console.log(`Computing and storing in cache: ${key}`);
      return result;
    }
  };
}

// Example usage:
const slowSquare = (n) => {
  console.log(`Computing square of ${n}`);
  return n * n;
};

const memoizedSquare = memoize(slowSquare);

console.log(memoizedSquare(5)); // Computes and caches result
console.log(memoizedSquare(5)); // Fetches from cache

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Computes and caches result
console.log(memoizedFactorial(5)); // Fetches from cache
console.log(memoizedFactorial(6)); // Computes and caches result
