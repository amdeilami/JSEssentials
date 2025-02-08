/*
    using `const` is another way of declaring a variable, it has all the features of `let`, except that 
    it is read-only
    It is a common convention to use only CAPITAL letters when naming constants and `_` to separate words
*/
const SENTENCE = "freeCodeCamp is amazing!";
console.log(SENTENCE);

// we mainly should focus on using `let` and `const` and avoid using `var` in most situations
for (let i = 0; i < 3; i++) {
    console.log(i+" "+SENTENCE);
}

/*
    while you cannot re-assign a variable declared with `const`, you can mutate an array declared with `const`!
*/
const s = [7, 5, 2];

function editInPlace() {
    // s = [2, 5, 7] --> it raises an error!
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
}
editInPlace();
console.log(JSON.stringify(s));

// as shown above, we can mutate `const` array (and objects)
// but what if we want to prevent mutation too?
// we can use Object.freeze() function for that
function freezeObject() {
    "use strict";
    const MATH_CONSTANT = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANT);
    try {
        MATH_CONSTANT["PI"] = 99;
    } catch (ex) {
        console.log("Err: \n"+ex);
    }
    return MATH_CONSTANT;
}
console.log(freezeObject());