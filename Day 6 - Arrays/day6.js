// Day 6: Arrays
// Tasks/Activities:

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
const arr = [1, 2, 3, 4, 5];
console.log(arr); // [ 1, 2, 3, 4, 5 ]

// Task 2: Access the first and last elements of the array and log them to the console.
let ele = arr[0];
console.log(ele); // 1
ele = arr[arr.length - 1];
console.log(ele); // 5

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.
let newLen = arr.push(9); // returns new length, adds element to last
console.log(arr, "New length :", newLen); // [ 1, 2, 3, 4, 5, 9 ] New length : 6

// Task 4: Use the pop method to remove the last element from the array and log the updated array.
let removed = arr.pop(); // returns removed element, removes element from last
console.log(arr, "Removed element:", removed); // [ 1, 2, 3, 4, 5 ] Removed element: 9

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
removed = arr.shift(); // returns removed element, removes element from first
console.log(arr, "Removed element:", removed); // [ 2, 3, 4, 5 ] Removed element: 1

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
newLen = arr.unshift(6); // returns new length, adds element to begin
console.log(arr, "New length :", newLen); // [ 6, 2, 3, 4, 5 ] New length : 5

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let newArr = arr.map((ele) => ele * 2);
console.log(newArr); // [ 12, 4, 6, 8, 10 ]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array.
newArr = arr.filter((ele) => !(ele % 2));
console.log(newArr); // [ 6, 2, 4 ]

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
sum = arr.reduce((acc, curr) => acc + curr);
console.log(`Sum of elements of ${arr} is ${sum}`); // Sum of elements of 6,2,3,4,5 is 20

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i < arr.length; i++) console.log(`arr[${i}] = ${arr[i]}`);
/*
Output :
arr[0] = 6
arr[1] = 2
arr[2] = 3
arr[3] = 4
arr[4] = 5
*/

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
arr.forEach((ele) => {
  console.log(ele);
});
/*
Output :
6
2
3
4
5
*/

arr.forEach((element, idx) => {
  console.log(`arr[${idx}] = ${element}`);
});
/*
Output :
arr[0] = 6
arr[1] = 2
arr[2] = 3
arr[3] = 4
arr[4] = 5
*/

// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
const multiArray = [
  [5, 3, 2],
  [1, 2, 4],
  [4, 5],
];
console.log(multiArray); // [ [ 5, 3, 2 ], [ 1, 2, 4 ], [ 4, 5 ] ]

console.log(`${multiArray}`); // 5,3,2,1,2,4,4,5
// Task 13: Access and log a specific element from the two-dimensional array.

console.log(multiArray[1][1]); // 2
console.log(multiArray[2][3]); // undefined
