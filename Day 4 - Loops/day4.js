// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
const printN = (n) => {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
};
printN(10);
// Task 2: Write a program to print the multiplication table of 5 using a for loop.
const printTable = (n) => {
  for (let i = 1; i < 11; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
};
printTable(5);

// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
const sumOfN = (n) => {
  let sum = 0,
    i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  console.log("Sum of", n, "numbers is", sum);
};
sumOfN(10);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
const printNInRev = (n) => {
  while (n > 0) {
    console.log(n);
    n--;
  }
};
printNInRev(10);

// Activity 3: Do...While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
const print = (n) => {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= n);
};
print(6);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
const fact = (n) => {
  let i = 1,
    fact = 1;
  do {
    fact *= i;
    i++;
  } while (i <= n);
  console.log("Factorial of", n, "is", fact);
};
fact(5);

// Activity 4: Nested Loops
// Task 7: Write a program to print a pattern using nested for loops.
const printPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`* `); // To skip new line
    }
    console.log();
  }
};
printPattern(5);

// Activity 5: Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
const useContinue = (n, c) => {
  for (let i = 1; i <= n; i++) {
    if (i == c) continue;
    console.log(i);
  }
};
useContinue(10, 5);

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
const useBreak = (n, c) => {
  for (let i = 1; i <= n; i++) {
    if (i == c) break;
    console.log(i);
  }
};
useBreak(10, 5);
