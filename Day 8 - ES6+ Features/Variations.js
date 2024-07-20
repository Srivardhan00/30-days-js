// multi line strings
let learnCoding =
  "Line 1" +
  " - Learn HTML" +
  " - Learn CSS" +
  " - Learn JavaScript" +
  "Line n";
console.log(learnCoding);
// Line 1 - Learn HTML - Learn CSS - Learn JavaScriptLine n

learnCoding =
  "Line 1 \n\
- Learn HTML \n\
- Learn CSS\n\
- Learn JavaScript \n\
Line n";
console.log(learnCoding);
/*
Output : 
Line 1
- Learn HTML
- Learn CSS
- Learn JavaScript
Line n
*/

// Task 6
let arr = [2, 3, 4, 1];
function addAll(...elements) {
  let sum = 0;
  arr.forEach((x) => {
    sum += x;
  });
  return sum;
}
console.log(addAll(arr)); // 10

const getSum = (elements) => elements.reduce((x, y) => x + y, 0);
console.log(getSum(arr)); // 10
