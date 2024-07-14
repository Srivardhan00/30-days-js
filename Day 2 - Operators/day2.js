// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console.
let a = 10,
  b = 20;
let sum = a + b;
console.log(sum); //30

// Task 2: Write a program to subtract two numbers and log the result to the console.
let diff = a - b;
console.log(diff); //10

// Task 3: Write a program to multiply two numbers and log the result to the console.
let mul = a * b;
console.log(mul); //200

// Task 4: Write a program to divide two numbers and log the result to the console.
let div = a / b;
console.log(div); //0.5

// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
let rem = a % b;
console.log(rem); //10

// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.
a += 15;
console.log(a); //25

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
a -= 10;
console.log(a); //15

// Activity 3: Comparison Operators

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
if (a < b) {
  console.log(`${a} is lt ${b}`); //logs
} else if (b < a) {
  console.log(`${b} is lt ${a}`);
} else {
  console.log(`${a} is eq ${b}`);
}

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
if (a >= b) {
  console.log(`${a} if gte ${b}`);
}
if (a <= b) {
  console.log(`${a} if lte ${b}`); //logs
}

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
if (5 == 5) {
  console.log("5==5"); //logs
}
if (5 === 5) {
  console.log("5===5"); //logs
}

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
if (5 < 10 && 7 > 2) {
  console.log("Both conditions are valid"); //logs
} else {
  console.log("At least one condition is invalid");
}

// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
if (7 > 12 || 1 > 0) {
  console.log("At least one condition is valid"); //logs
} else {
  console.log("All conditions are invalid");
}

// Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
if (!(0 > 9)) {
  console.log("Actual condition is invalid"); //logs
} else {
  console.log("Actual condition is valid");
}

// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
let num = 100;
console.log(num >= 0 ? `${num} is positive` : `${num} is negative`); //100 is positive
