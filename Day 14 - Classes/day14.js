// Day 14: Classes
// Tasks/Activities:

// Activity 1: Class Definition

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi I am ${this.name}, ${this.age}`);
  }
  updateAge = function (newAge) {
    this.age = newAge;
  };
}

const p1 = new Person("ABC", 20);
p1.greet();

p1.updateAge(30);
p1.greet();

// Activity 2: Class Inheritance

// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

class Student extends Person {
  constructor(name, age, id) {
    super(name, age);
    this.id = id;
  }
  greet() {
    console.log(`I am ${this.id}, ${this.name}`);
  }
  studentId() {
    return this.id;
  }
}

const s1 = new Student("ab", 20, "155A");
console.log(s1.studentId());
s1.greet();

// Activity 3: Static Methods and Properties

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
Person.generic = () => {
  console.log("Some Person");
};

Person.generic();

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class Student2 extends Person {
  static count = 0; //static for the class
  constructor(name, age, id) {
    super(name, age);
    this.id = id;
    Student2.count += 1; //should be incremented at class
  }
  greet() {
    console.log(`I am ${this.id}, ${this.name}`);
  }
  studentId() {
    return this.id;
  }
}
const s2 = new Student2("a", 20, "156");
const s3 = new Student2("a", 20, "156");
const s4 = new Student2("a", 20, "156");

console.log(Student2.count);

// Activity 4: Getters and Setters

// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

class Person2 {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const p2 = new Person2("abc", "xyz", 45);
console.log(p2.fullName); // Access getter directly as a property
p2.fullName = "Abz pqs"; // Use setter to update
console.log(p2.fullName); // Check updated name

// Activity 5: Private Fields (Optional)
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

class Account {
  #balance; // Private field to hold the balance
  // Constructor to initialize the balance to 0
  constructor() {
    this.#balance = 0;
  }

  // Method to deposit money and update the balance
  deposit(amt) {
    this.#balance += amt;
    this.getBalance();
  }

  // Method to withdraw money and update the balance
  withdraw(amt) {
    this.#balance -= amt;
    this.getBalance();
  }

  getBalance() {
    console.log(`Current Balance = ${this.#balance}`);
  }
}

const act = new Account();
act.deposit(500);
act.withdraw(40);
