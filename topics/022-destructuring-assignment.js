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