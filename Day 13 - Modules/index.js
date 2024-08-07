// Day 13: Modules
// Tasks/Activities:

// Activity 1: Creating and Exporting Modules

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
import { adding, person } from "./module1.js";

console.log(adding(4, 9));

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
console.log(person.name);
console.log(person.greet());

// Activity 2: Named and Default Exports

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
import { subs, add } from "./module2.js";

console.log(add(10, 29));
console.log(subs(20, 8));

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
import m from "./module3.js";
console.log(m(2, 4));

// Activity 3: Importing Entire Modules

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
import * as myModule from "./module4.js";

console.log(myModule);

console.log(myModule.a);
console.log(myModule.b);
myModule.hi();
myModule.greet();

// Activity 4: Using Third-Party Modules

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
import _ from "lodash";

console.log(_.partition([1, 2, 3, 4], (n) => n % 2));

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
import axios from "axios";

async function fetchData() {
  try {
    const response = await axios.get(
      "https://api.github.com/users/srivardhan00"
    );
    console.log(response.data.login);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

// Activity 5: Module Bundling (Optional)

// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
