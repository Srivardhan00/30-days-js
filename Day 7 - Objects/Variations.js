// Task 1 Variation Using Object Constructor
let book = new Object();
book.title = "First Book";
book.author = "First Author";
book.year = 2022;

console.log(book); // { title: 'First Book', author: 'First Author', year: 2022 }
console.log(book.title); // First Book
console.log(book.author); // First Author

// Variation for getting named functions
function getInfo() {
  return `Title: ${this.title}, Author: ${this.author}`;
}

function updateYear(year) {
  this.year = year;
}

function getDetails() {
  return `Title: ${this.title}, Year: ${this.year}`;
}

book = {
  title: "First Book",
  author: "First Author",
  year: 2022,
  getInfo, // Assign named function
  updateYear, // Assign named function
  getDetails, // Assign named function
};
console.log(book);

/*
Output : 
{
  title: 'First Book',
  author: 'First Author',
  year: 2022,
  getInfo: [Function: getInfo],
  updateYear: [Function: updateYear],
  getDetails: [Function: getDetails]
}
*/

// Using Function Expressions
const book2 = {
  title: "Book",
  author: "Author",
  year: 2200,
  getInfo: function () {
    return `Title: ${this.title}, Author: ${this.author}`;
  },
  updateYear: function (year) {
    this.year = year;
  },
};
console.log(book2);

/*
Output :
{
  title: 'Book',
  author: 'Author',
  year: 2025,
  getInfo: [Function: getInfo],
  updateYear: [Function: updateYear]
}
*/

// Using methods within
// Activity 5: Object Iteration
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book’s title and year, and log the result of calling this method.
const library = {
  name: "Not the first library",
  books: [
    { title: "First", author: "One", year: 2000 },
    { title: "Oh first", author: "Two", year: 2009 },
    { title: "Oh second", author: "Two", year: 2012 },
    { title: "The First", author: "Three", year: 1998 },
    { title: "Second", author: "One", year: 2013 },
  ],
  getLibraryName() {
    return this.name;
  },
  getBookTitles() {
    return this.books.map((book) => book.title);
  },
};

console.log(library);
/*
Output : 
{
  name: 'Not the first library',
  books: [
    { title: 'First', author: 'One', year: 2000 },
    { title: 'Oh first', author: 'Two', year: 2009 },
    { title: 'Oh second', author: 'Two', year: 2012 },
    { title: 'The First', author: 'Three', year: 1998 },
    { title: 'Second', author: 'One', year: 2013 }
  ],
  getLibraryName: [Function: getLibraryName],
  getBookTitles: [Function: getBookTitles]
}
*/
console.log(library.getLibraryName()); // Not the first library
console.log(library.getBookTitles()); // [ 'First', 'Oh first', 'Oh second', 'The First', 'Second' ]

// Task 8: Use a for...of loop to iterate over the properties of the book object and log each property and its value.
for (const [key, value] of Object.entries(book)) {
  console.log(`${key}: ${value}`);
}
/*
Output :
title: First Book
author: First Author
year: 2022
getInfo: function getInfo() {
  return `Title: ${this.title}, Author: ${this.author}`;
}
updateYear: function updateYear(year) {
  this.year = year;
}
getDetails: function getDetails() {
  return `Title: ${this.title}, Year: ${this.year}`;
}
*/
