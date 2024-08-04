// Day 11: Promises and Async/Await
// Tasks/Activities:

// Activity 1: Understanding Promises

// Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise Task 1");
    resolve("Success");
  }, 2000);
})
  .then(() => {
    console.log("Task 1 resolved");
  })
  .catch(() => {
    console.log("Task 1 Reject");
  });

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Failed"));
  }, 2000);
});

pr.then(() => {
  console.log("Task 2 Resolve");
}).catch((e) => {
  console.log(`Error Task 2 : ${e.message}`);
});

// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const pr1 = new Promise((res, rej) => {
  console.log("Initiate Request");
  res();
})
  .then(() => {
    console.log("Send Request");
    return true;
  })
  .then((T) => {
    if (T) {
      console.log("Received Response");
      return true;
    } else {
      return Promise.reject(new Error("Failed Sending Request"));
    }
  })
  .then((T) => {
    if (T) {
      console.log("Parsing and Handling");
      return true;
    } else {
      return Promise.reject(new Error("Response not recieved"));
    }
  })
  .catch((e) => {
    console.log("Error :", e.message);
    return Promise.reject(e.message);
  })
  .finally(() => {
    console.log("Process Completed");
  });

// Activity 3: Using Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise Task 4");
    resolve("Success");
  }, 2000);
});

async function fun() {
  const resp = await pr2;
  console.log(resp);
}

fun();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const pr3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("async-try-catch"));
  }, 3000);
});

async function fun2() {
  try {
    await pr3;
  } catch (error) {
    console.log(error.message);
  }
}

fun2();

// Activity 4: Fetching Data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch("https://api.github.com/users/srivardhan00")
  .then((resp) => {
    return resp.json(); // Parse the JSON from the response
  })
  .then((data) => {
    console.log(data.login); // Log the specific property 'login'
  })
  .catch((e) => {
    console.log("Error:", e.message);
  });

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fun3() {
  const resp = await fetch("https://api.github.com/users/srivardhan00");
  const data = await resp.json();
  console.log(data.url);
}
fun3();

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
Promise.all([p, pr1, pr2])
  .then((vals) => {
    console.log(vals);
  })
  .catch((e) => {
    console.log(e);
  });

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race
Promise.race([p, pr1, pr2])
  .then((val) => {
    console.log(val);
  })
  .catch((e) => {
    console.log(e);
  });
