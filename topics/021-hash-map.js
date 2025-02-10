"use strict";
// you may have noticed before, but in javascript, hash map is implemented using object
// so if you have followed the scripts in order, you've seen hash map before

let map = {};
/**
 * in javascript, the keys can be any `value` including: datatypes, objects, functions
 * the values can be any data type
 */

map [1] = 5;
map [`1`] = 3;
map ["abc"] = 7;
console.log(map[1]);
console.log(map["1"]); // the outputs are going to be the same

// checking if a key exists in map
console.log("3" in map);

// deleting a key-value pair in map
console.log("abc" in map);
delete map["abc"];
console.log("abc" in map);

/**
 * in the following example, I'm trying to count occurrence of each element of an array
 * trying to write it in a functional way
 */
const arr = [1, 2, 3, 2, 2, 5, 5, 6, 1, 1, 3];
let count = {};

arr.forEach(element => {
    count[element] == undefined ? count[element] = 1 : count[element]++;
    return 0; // puted this here intentionally for myself to make sure that return vlaue doesn't matter here...
              // ...since we are modifying `count` directly
});

for (let key in count) {
    console.log("Element " + key + " has occurred " + count[key] + " times");
}