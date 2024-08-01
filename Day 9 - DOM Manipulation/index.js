// Day 9: DOM Manipulation
// Tasks/Activities:
// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content.
const act1 = document.querySelector("#act1");
act1.innerHTML = "ChangedText";

// Task 2: Select an HTML element by its class and change its background color.
const act2 = document.querySelector(".act2");
act2.style.backgroundColor = "red";

// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body.
const newEle = document.createElement("div");
newEle.innerText = "Added Child";
const body = document.querySelector("body");
body.append(newEle);

// Task 4: Create a new li element and add it to an existing ul list.
const ul = document.querySelector("#ul1");
const newLi = document.createElement("li");
newLi.innerHTML = "Four";
ul.appendChild(newLi);

// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM.
act1.remove();

// Task 6: Remove the last child of a specific HTML element.
ul.removeChild(ul.lastChild);

// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
ul.className = "myList";

// Task 8: Add and remove a CSS class to/from an HTML element.
act2.className = "act2Modified act2"; //adding
act2.className = ""; // removing

//WE CAN DO THIS EFFICIENTLY BY
act2.classList.add("act2Modified"); // adding
act2.classList.remove("act2Modified"); // removing

//ELSE WE CAN TOGGLE
act2.classList.toggle("act2Modified");

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const btn = document.querySelector("#btn");
const p = document.getElementById("act5");
btn.addEventListener("click", () => {
  p.innerHTML === "lorem ipsum"
    ? (p.innerHTML = "Lorem, ipsum dolor")
    : (p.innerHTML = "lorem ipsum");
});

// Task 10: Add a mouseover event listener to an element that changes its border color.
const ele = document.querySelector("h1");

const btnHandler = ele.addEventListener("mouseover", () => {
  ele.style.borderColor = "black";
});

// To remove the event listener
// btn.removeEventListener("click", btnHandler);
