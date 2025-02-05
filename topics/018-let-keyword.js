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

