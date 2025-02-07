// some people use "use strict" directive at the begnning of a function (or file), to catch common mistakes in coding
"use strict";

// using `var` you can DEFINE a variable more than once!
// while using `let` you are not allowed to re-define the same variable name in the same scope
var catName = "Joe";
var catName = "Nick";

console.log(catName);

// but when using `let`, you can `define` only once
let dogName = "Fish";
/* Now if I write:
    let dogName = "Snake";
    it will raise an error, although I can modify it again
*/
dogName = "Flower";

console.log(dogName);

/*
    The scope of `var` and `let` are different in javascript
    `var` has a global scope or function-wide scope if declared inside a function
    `let` on the other hand, has a scope limited to the smallest block which has been declared in
*/

function checkScopeVar() {
    "use strict";
    var i = "function scope";
    if (true) {
        var i = "Block scope";
        console.log("Inside block, the i is: " + i);
    }
    console.log("Right after the block, now i is: " + i);
}
// note that how it is working
checkScopeVar();

function checkScopeLet() {
    "use strict";
    let i = "function scope";
    if (true) {
        let i = "block scope";
        console.log("inisde the block, i is: "+i);
    }
    console.log("right after the block, now i is: "+i);
}
// look how it is different from `var`
checkScopeLet();