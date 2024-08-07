export const adding = (a, b) => a + b;

export const person = {
  name: "John Doe",
  age: 30,
  greet: function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};
