// Boolean values are primitive data type in javascript
// they can be either true, or false
// true and false are reserved words like many other languages

// we use `if` statements to direct the flow of executtion based on boolean values
function wasItTrue(val) {
    if (val) {
        return "It was true!";
    }
    return "It was false!";
}

console.log(wasItTrue(true));
console.log(wasItTrue(false));

// equality operator is `==`
function isItTen(val) {
    if (val == 10) {
        return "Yes!";
    }
    return "No!";
}

console.log(isItTen(12));

// strict equality operator is `===`
// `==` attempts to convert values to be of the same type, then does the comparison
// `===` does not do conversion and directly compares
function strictEqual(val) {
    if (val === 7) {
        return "Equal!";
    }
    return "not Equal!";
}

console.log(strictEqual('7'));


// inequality operator is `!=`
// like equality, it does a type conversion
function testNotEqual(val) {
    if (val != 10) {
        return "Not Equal!";
    }
    return "Equal!";
}

console.log(testNotEqual('10'));

// strict inequality operator is `!==` and it does not convert types
function testStrictNotEqual(val) {
    if (val !== 10) {
        return "Not Equal!";
    }
    return "Equal!";
}

console.log(testStrictNotEqual('10'));