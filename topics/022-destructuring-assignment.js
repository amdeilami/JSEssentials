"use strict";
/**
 * instead of doing multiple assignments when copying some objects into variables...
 * ...we can use destructuring assignment for less amount of code
 */

const obj = {x: 3.6, y: 4.8, z: 5.9};


const {x: a, y: b, z: c} = obj;
/**
 * read the above code in this way:
 * get the value of `x` in `obj` and assign it to `a`
 * get the value of `y` in `obj` and assign it to `b`
 * get the value of `z` in `obj` and assign it to `c`
 */
console.log(a);
console.log(b);
console.log(c);

// using destructuring assignments with nested objects
const LOCAL_FORECAST = {
    today: {min: 23, max: 36},
    tomorrow: {min: 21, max: 35}
};

const {tomorrow: {max: maxTomorrow}} = LOCAL_FORECAST;
console.log(maxTomorrow);

/**
 * using destructuring assignment to assign variables from arrays
 */

const [e, f] = [1, 2, 3, 4, 5, 6];
// unlike objects, we cannot decide which array elements should be assigned to variables, they just go by order

console.log(e);
console.log(f);

const [g, , h, , i] = [1, 2, 3, 4, 5]; // skipping elements
console.log(g);
console.log(h);
console.log(i);

// we can use these features to swap values between two variables
let frist = 1;
let second = 2;
(() => {
    [frist, second] = [second, frist];
})();

console.log(frist);
console.log(second);

// use destructuring assignment with the Rest operator
/**
 * removing first two elements of an array using Rest operator (`...`)
 */
function removeFirstTwoElements(list) {
    const [ , , ...arr] = list;
    return arr;
}

const list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(removeFirstTwoElements(list1));

// passing function's arguments using destructuring assignment
const stats = {
    max: 8.5,
    min: 6.5,
    standard: 4.3,
    error: 9.1
};

const half = (() => {
    return function jaguar({min, max}) {
        return (max + min) / 2.0;
    }
})();

console.log(half(stats));