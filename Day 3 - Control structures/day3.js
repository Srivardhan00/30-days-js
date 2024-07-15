// Day 3: Control Structures
// Tasks/Activities:

// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
const checkNum = (a) => {
  if (a >= 0) {
    console.log(a, "is positive");
  } else {
    console.log(a, "is negative");
  }
};
checkNum(9); //9 is positive
checkNum(-19); //-19 is negative

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
const checkValidAge = (name, age) => {
  if (age >= 18) {
    console.log(`${name} is eligible to vote`);
  } else {
    console.log(`${name} is not eligible to vote`);
  }
};
checkValidAge("av", 19); //av is eligible to vote
checkValidAge("abb", 9); //abb is not eligible to vote

// Activity 2: Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
const getMax = (a, b, c) => {
  if (a > b) {
    if (a > c) {
      console.log(`${a} is max`);
    } else {
      console.log(`${c} is max`);
    }
  } else {
    if (b > c) {
      console.log(`${b} is max`);
    } else {
      console.log(`${c} is max`);
    }
  }
};
getMax(5, 4, 2); //5 is max
getMax(5, 6, 2); //6 is max
getMax(2, 3, 5); //5 is max

// Activity 3: Switch Case

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
const getDay = (a) => {
  switch (a) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid");
  }
};
getDay(1); //Sunday
getDay(20); //Invalid

// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
const getGrade = (marks) => {
  let grade;
  switch (true) {
    case marks <= 100 && marks >= 90:
      grade = "A";
      break;
    case marks < 90 && marks >= 75:
      grade = "B";
      break;
    case marks < 75 && marks >= 60:
      grade = "C";
      break;
    case marks >= 40 && marks < 60:
      grade = "D";
      break;
    case marks < 40 && marks >= 0:
      grade = "F";
      break;
    default:
      grade = "Invalid";
  }
  console.log("Grade is", grade);
};
getGrade(0); //Grade is F
getGrade(90); //Grade is A
getGrade(-99); //Grade is Invalid

// Activity 4: Conditional (Ternary) Operator

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
const evenOrOdd = (num) => {
  console.log(num % 2 ? `${num} is odd` : `${num} is even`);
};
evenOrOdd(5); //5 is odd
evenOrOdd(8); //8 is even

// Activity 5: Combining Conditions

// Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
const isLeapYear = (year) => {
  if (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) {
    console.log(`${year} is a leap year`);
  } else {
    console.log(`${year} is not a leap year`);
  }
};
isLeapYear(2024); //2024 is a leap year
isLeapYear(2000); //2000 is a leap year
isLeapYear(1800); //1800 is not a leap year
