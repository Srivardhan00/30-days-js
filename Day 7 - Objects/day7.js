// Day 7: Objects
// Tasks/Activities:

// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
  title: "First Book",
  author: "First Author",
  year: 2022,
};
console.log(book); // { title: 'First Book', author: 'First Author', year: 2022 }

// Task 2: Access and log the title and author properties of the book object.
console.log(book.author); // First Author
console.log(book.title); // First Book

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book’s title and author, and log the result of calling this method.
book.getInfo = function () {
  return `Title : ${this.title} Author :${this.author}`;
};

console.log(book.getInfo()); // Title : First Book Author :First Author

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book’s year property, then log the updated object.
book.updateYear = function (year) {
  this.year = year;
};
book.updateYear(2025);
console.log(book);

/*
Output:
{
  title: 'First Book',
  author: 'First Author',
  year: 2025,
  getInfo: [Function (anonymous)],
  updateYear: [Function (anonymous)]
}
*/

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
  name: "Not the first library",
  books: [
    {
      title: "First",
      author: "One",
      year: 2000,
    },
    {
      title: "Oh first",
      author: "Two",
      year: 2009,
    },
    {
      title: "Oh second",
      author: "Two",
      year: 2012,
    },
    {
      title: "The First",
      author: "Three",
      year: 1998,
    },
    {
      title: "Second",
      author: "One",
      year: 2013,
    },
  ],
};

console.log(library);

/*
Output:
{
  name: 'Not the first library',
  books: [
    { title: 'First', author: 'One', year: 2000 },
    { title: 'Oh first', author: 'Two', year: 2009 },
    { title: 'Oh second', author: 'Two', year: 2012 },
    { title: 'The First', author: 'Three', year: 1998 },
    { title: 'Second', author: 'One', year: 2013 }
  ]
}
*/

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name); // Not the first library

for (let i = 0; i < library.books.length; i++) {
  console.log(library.books[i].title);
}
// OR
library.books.forEach((book) => {
  console.log(book.title);
});
/*
Output: 
First
Oh first
Oh second
The First
Second
*/

// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book’s title and year, and log the result of calling this method.
book.getDetails = function () {
  return `Title : ${this.title}, Year : ${this.year}`;
};
console.log(book.getDetails()); // Title : First Book, Year : 2025

// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.

for (const key in book) {
  console.log(`${key} : ${book[key]}`);
}
/*
Output: 
title : First Book
author : First Author
year : 2025
getInfo : function () {
  return `Title : ${this.title} Author :${this.author}`;
}
updateYear : function (year) {
  this.year = year;
}
getDetails : function () {
  return `Title : ${this.title}, Year : ${this.year}`;
}
*/

for (const key in book) {
  if (Object.hasOwnProperty.call(book, key)) {
    const element = book[key];
    console.log(`${key} : ${element}`);
  }
}

/*
Output:
title : First Book
author : First Author
year : 2025
getInfo : function () {
  return `Title : ${this.title} Author :${this.author}`;
}
updateYear : function (year) {
  this.year = year;
}
getDetails : function () {
  return `Title : ${this.title}, Year : ${this.year}`;
}
*/

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book)); // [ 'title', 'author', 'year', 'getInfo', 'updateYear', 'getDetails' ]
console.log(Object.values(book));
/*
Output:
[
  'First Book',
  'First Author',
  2025,
  [Function (anonymous)],
  [Function (anonymous)],
  [Function (anonymous)]
]
*/
