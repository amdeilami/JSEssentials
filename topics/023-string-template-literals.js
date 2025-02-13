/**
 * creating strings with template literals
 * it makes creating complex strings easier
 * we use backtik ` for it
 */

const person = {
    name: "Alexander M.",
    age: 25
};

const greetings = `Hello, my name is ${person.name} and I am "${person.age}" years old`;
console.log(greetings);