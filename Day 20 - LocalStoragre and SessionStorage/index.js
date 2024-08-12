// Day 20: LocalStorage and SessionStorage

// Tasks/Activities :

// REF : https://www.freecodecamp.org/news/web-storage-localstorage-vs-sessionstorage-in-javascript/

// Activity 1: Understanding LocalStorage

// Task 1: Save a string value to localStorage and retrieve it. Log the retrieved value.
const str = "first";

// Save the string to localStorage with the key 'string'
window.localStorage.setItem("string", str);

// Retrieve the string value from localStorage and log it
console.log(localStorage.getItem("string"));

// Task 2: Save an object to localStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
const obj = {
  name: "One",
  val: 1,
};

// Convert the object to a JSON string and save it to localStorage with the key 'object'
localStorage.setItem("object", JSON.stringify(obj));

// Retrieve the JSON string from localStorage, parse it back to an object, and log it
console.log(JSON.parse(localStorage.getItem("object")));

// Activity 2: Using LocalStorage

// Task 3: Save user input (name and email) to localStorage when the form is submitted. Retrieve and display the saved data on page load.
const form1 = document.getElementById("form1");
const localSubmit = document.getElementById("localSubmit");
const username1 = document.querySelector("#username1");
const email1 = document.querySelector("#email1");
const greet = document.getElementById("greet");

// Add an event listener to handle the form submission
localSubmit.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default form submission behavior (i.e., reloading the page)

  // Save the user input values (name and email) to localStorage
  localStorage.setItem(username1.name, username1.value);
  localStorage.setItem(email1.name, email1.value);

  // Reload the page to trigger the load event and display the saved data
  location.reload();
});

// On page load, retrieve the saved data from localStorage and display it if available
window.addEventListener("load", (e) => {
  const uname = window.localStorage.getItem("username");
  const email = window.localStorage.getItem("email");

  // If user data is found in localStorage, display it in the greeting section
  if (uname) {
    greet.innerHTML = uname + " " + email;
  }
});

// Task 4: Remove an item from localStorage. Log the localStorage content before and after removal.
console.log(localStorage); // Log current localStorage content
localStorage.removeItem("string"); // Remove the item with key 'string' from localStorage
console.log(localStorage); // Log localStorage content after removal

// Activity 3: Understanding SessionStorage

// Task 5: Save a string value to sessionStorage and retrieve it. Log the retrieved value.
window.sessionStorage.setItem("string", str); // Save the string to sessionStorage with the key 'string'
console.log(sessionStorage.getItem("string")); // Retrieve and log the string value from sessionStorage

// Task 6: Save an object to sessionStorage by converting it to a JSON string. Retrieve and parse the object, then log it.
sessionStorage.setItem("object", JSON.stringify(obj)); // Convert the object to a JSON string and save it to sessionStorage
console.log(JSON.parse(sessionStorage.getItem("object"))); // Retrieve the JSON string, parse it, and log the object

// Activity 4: Using SessionStorage

// Task 7: Save user input (name and email) to sessionStorage when the form is submitted. Retrieve and display the saved data on page load.
const form2 = document.getElementById("form2");
const sessionSubmit = document.getElementById("sessionSubmit");
const username2 = document.querySelector("#username2");
const email2 = document.querySelector("#email2");
const greet2 = document.getElementById("greet2");

// Add an event listener to handle the form submission for sessionStorage
sessionSubmit.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Validate inputs before saving to sessionStorage
  if (username2.value.trim() && email2.value.trim()) {
    // Save the user input values (name and email) to sessionStorage
    sessionStorage.setItem(username2.name, username2.value);
    sessionStorage.setItem(email2.name, email2.value);

    // Update the DOM directly to display the saved data without reloading the page
    greet2.innerHTML = username2.value + " " + email2.value;
  } else {
    // Alert the user if input fields are empty
    alert("Please fill out both fields!");
  }
});

// On page load, retrieve the saved data from sessionStorage and display it if available
window.addEventListener("load", (e) => {
  const uname = window.sessionStorage.getItem("username");
  const email = window.sessionStorage.getItem("email");

  // If user data is found in sessionStorage, display it in the greeting section
  if (uname) {
    greet2.innerHTML = uname + " " + email;
  }
});

// Task 8: Remove an item from sessionStorage. Log the sessionStorage content before and after removal.
console.log(sessionStorage); // Log current sessionStorage content
sessionStorage.removeItem("string"); // Remove the item with key 'string' from sessionStorage
console.log(sessionStorage); // Log sessionStorage content after removal

// Activity 5: Comparing LocalStorage and SessionStorage

// Task 9: Function to save a key-value pair to both localStorage and sessionStorage. Retrieve and log the values from both.
const storeAPair = (k, v) => {
  // Save the value to both storages using the provided key
  sessionStorage.setItem(k, v);
  localStorage.setItem(k, v);
};

// Example usage of the function to store a key-value pair
storeAPair("key1", 20);
console.log("local :", localStorage.key1); // Log the value from localStorage
console.log("session :", sessionStorage["key1"]); // Log the value from sessionStorage

// Task 10: Function to clear all data from both localStorage and sessionStorage. Verify that both storages are empty.
localStorage.clear(); // Clear all data from localStorage
sessionStorage.clear(); // Clear all data from sessionStorage

// Verify and log that both storages are empty
console.log(localStorage);
console.log(sessionStorage);
