// Day 12: Error Handling

// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function raiseError() {
  throw new Error("Find me");
}

try {
  raiseError();
} catch (error) {
  console.log("Catch block");
  console.log(error.message);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divide(a, b = 1) {
  if (b == 0) {
    throw new Error("Denominator can't be zero");
  }
  return a / b;
}
try {
  b = divide(6, 3);
  console.log(b);
  a = divide(5, 0);
  console.log(a);
} catch (error) {
  console.log(error.message);
}

// Activity 2: Finally Block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
  b = divide(6, 3);
  console.log(b);
  console.log("Try block");
  a = divide(5, 0);
  console.log(a);
} catch (error) {
  console.log("Catch block");
  console.log(error.message);
} finally {
  console.log("Finally Block");
}

// Activity 3: Custom Error Objects

// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class myError extends Error {
  constructor(statusCode, message = "Something went Wrong", errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
  }
}

function abc() {
  throw new myError(500, "Failed");
}
try {
  abc();
} catch (error) {
  console.log("Error :", error.message);
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class stringError extends Error {
  constructor(message = "Invalid String Input") {
    super(message);
  }
}

function str(a = "") {
  if (a === "") {
    throw new stringError("The string is empty");
  }
  return true;
}
try {
  console.log(str("abcd"));
  str("");
} catch (error) {
  console.log("Error : ", error.message);
}

// Activity 4: Error Handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const p = new Promise((resolve, reject) => {
  r = Math.floor(Math.random() * 2);
  if (r == 0) {
    resolve();
  } else {
    reject();
  }
})
  .then(() => {
    console.log("Promise Resolved");
  })
  .catch(() => {
    console.log("Promise Rejected");
  });

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
const p2 = new Promise((resolve, reject) => {
  r = Math.floor(Math.random() * 2);
  if (r == 0) {
    resolve();
  } else {
    reject();
  }
});

async function abc() {
  try {
    await p2;
    console.log("Promise Resolved");
  } catch (error) {
    console.log("Promise Rejected");
  }
}
abc();

// Activity 5: Graceful Error Handling in Fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
fetch("https://api.githu.com/users/srivardhan00")
  .then((resp) => {
    return resp.json(); // Parse the JSON from the response
  })
  .then((data) => {
    console.log(data.login); // Log the specific property 'login'
  })
  .catch((e) => {
    console.log("Error:", e.message);
  });

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fn() {
  try {
    const resp = await fetch("https://api.githu.com/users/srivardhan00");
    const data = await resp.json();
    console.log(data.url);
  } catch (error) {
    console.log("Error :", error.message);
  }
}
fn();
