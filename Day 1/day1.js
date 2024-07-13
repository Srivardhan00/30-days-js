// Day 1: Variables and Data Types

// Tasks/Activities:

// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var a = 99
console.log(a);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let str = "day1"
console.log(str);

// Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const valid = false
console.log(valid);

// Activity 3: Data Types

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
let v1 = 98
let v2 = "100"
let v3 = false
let v4 = {"value":56}
let v5 = [0,1,2,3]

console.log(v1 , "is",typeof v1);
console.log(v2+"is"+typeof v2);
console.log(`${v3} is ${typeof v3}`);
console.log(v4 , "is",typeof v4);
console.log(v5 , "is",typeof v5);

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let v = "Yes"
console.log(v);
v="No"
console.log(v);

// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.
valid = true // Error : TypeError: Assignment to constant variable.