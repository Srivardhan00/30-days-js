// Day 10: Event Handling

// Tasks/Activities:

// Activity 1: Basic Event Handling

// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const btn = document.querySelector("#btn");
const p = document.getElementById("act5");
btn.addEventListener("click", () => {
  p.innerHTML === "lorem ipsum"
    ? (p.innerHTML = "Lorem, ipsum dolor")
    : (p.innerHTML = "lorem ipsum");
});

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const img = document.querySelector("#img1");

img.addEventListener("dblclick", () => {
  img.classList.toggle("visibility");
});

// Activity 2: Mouse Events

// Task 3: Add a mouseover event listener to an element that changes its background color.
const task3 = document.getElementById("task3");

task3.addEventListener("mouseover", () => {
  task3.style.backgroundColor = "aliceblue";
});

// Task 4: Add a mouseout event listener to an element that resets its background color.
task3.addEventListener("mouseout", () => {
  task3.style.backgroundColor = "red";
});

// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const txt = document.getElementById("textInput");

txt.addEventListener("keydown", (e) => {
  console.log(e.key);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const text = document.querySelector("#text");
const task6 = document.querySelector("#task6");

text.addEventListener("keyup", () => {
  task6.textContent = text.value;
});

// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const num = document.querySelector("#num");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(num.value);

  // Create a FormData object from the form, this approach needs the name attribute
  const formData = new FormData(form);

  console.log(formData);

  // Iterate over the form data and log each key-value pair
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const cars = document.querySelector("#cars");
const select = document.getElementById("select");

cars.addEventListener("change", () => {
  select.textContent = cars.value;
});

// Activity 5: Event Delegation

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const ul = document.getElementById("ul");
ul.addEventListener("click", (e) => {
  //To avoid logging entire ul element
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const ul2 = document.getElementById("ul2");
ul2.addEventListener("click", (e) => {
  //To avoid logging entire ul element
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});

let a = "1";
const btnn = document.querySelector("#btn3");
btnn.addEventListener("click", () => {
  const ele = document.createElement("li");
  ele.innerHTML = `new ${a}`;
  a++;
  ul2.appendChild(ele);
});
