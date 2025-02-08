"use strict";
// anonymous functions, don't have a name and are often used to make the code concise
// they are effective in scope and naming management, since they have their own scope
// they can be passed to other functions as an argument
const MAGIC = function() {
    return new Date();
};

// or we can even get rid of `function` keyword to make an `arrow function`
const MAGI_C = () => {
    return new Date();
};

// if we are returning one value, we don't even need to use `return` keyword or curly braces
const MAG_IC = () => new Date();

// writing arrow functions with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[5,6]));

// suppose we have an array of numbers and want to calculate square of positive elements using an arrow function
// arrow functions have this application to be used with higher-order functions like `map`
const realNumberArray = [1.2,2.4,4.8,0,-1,-8.2,-9,6,98];
// if you have only one argument to pass to an `arrow function` you can omit the parantheses
const squareList = arr => {
    const squaredNumbers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredNumbers;
};

console.log(squareList(realNumberArray));

// writing higher-order arrow functions
// default parameters: when corresponding argument(s) have not been specified, the default value will be used
const INCREMENT = (num, value = 1) => {
    return num + value;
};
// in the above function, if we don't specifiy the increment value, the `num` will be increased by `1`

console.log(INCREMENT(5,2));
console.log(INCREMENT(5));

/*
    when the exact number of arguments passed to a function is
    different in each call, we can use the Rest operator which is three dots `...`
*/
const SUM = (function() {
    return function(...args) {
        return args.reduce((a,b) => a + b, 0)
    };
})();

console.log(SUM(1,2,3,4,5));

// you might have noticed some new things about the above function:
/*
    * We used an Immediately Invoked Function Expression (IIFE): (function() { ... })()
    * The outer function is invoked immediately, so the result of that IIFE call is directly assigned to SUM.
    * In other words, SUM ends up being the inner function itself (the one that does the summation).
    * Therefore, when you call SUM(1,2,3,4,5), you’re actually calling the summation function, which returns 15.
*/

// how IIFE works?
/*
    1- We wrap the function in parentheses: (function () { //... })
    This transforms the `function declaration` into a `function expression`.

    2- We call it immediately by adding () after it: (function () { //... })();
    This ensures that the function is executed right away, rather than defining it and waiting for a later call.

    Why people use IIFE?
    You might need to do a search for better and more complete answer, but:
    * Avoid pulluting the global scope as everything declared inside IIFE exists only in the local scope
    * Sometimes you have code that should run only once (eg., setup)
    * By returning an inner function from the IIFE (or otherwise capturing variables), you can create
        closures that `remember` state without exposing it globally. (interesting!)
*/

// Spread operator looks like the Rest operator `...` and it can be used to spread an array into individual elements
const arr1 = ["One", "Two", "Three", "Four"];
let arr2;
(function() {
    // arr2 = arr1; // this does not copy arr1 into arr2, in fact both will be pointing at the same thing
    arr2 = [...arr1];
    arr1[0] = "Six";
})();

console.log(arr1);
console.log(arr2);