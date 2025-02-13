"use strict";
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

/**
 * one of the interesting applications of thses templates is generating HTML text blocks
 */

const result = {
    success: ["max-length", "no-amd"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist"]
};

function makeList(arr) {
    const resultArray = []
    for (let i = 0 ; i < arr.length; i++) {
        resultArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return resultArray;
}

console.log(makeList(result.failure));

/**
 * creating new objects easily using arrow functions and literals
 */
// if you know that `keys` and function argumetns that you are passing as values, have the same naem...
// .. there is an easier way to create an object:

const createPerson = (name, age, gender) => {
    return {name, age, gender};
};
// in the above arrow function, I'm explicitly returning the created object
// I can use concise arrow functions with parentheses to return object implicitly without `return` keyword
console.log(createPerson("Zodiac Hasbro", 56, "male"));
console.log(createPerson("Kelly kira", 36, "female"));