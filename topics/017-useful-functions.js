// in order to change a `str` value to `int` value, we can use parseInt function
function convertStrToInt(str) {
    return parseInt(str);
}
num = convertStrToInt("56");
console.log(num);

// when parsing, the dafault base value is `10`, but what if we want to parse it into another base? (radix)
// for example having a string like "10011", using `parseInt("10011") will result in `10011` as a number in base `10`
binaryNumber = parseInt("10011",2);
console.log(binaryNumber);


// the instructor loves ternary operators, so do I!
// here is how we can compress an if-else statement using a ternary operator:
// condition ? if-true statement : if-false statement
function checkEquality(a, b) {
    return (a===b) ? true : false;
    // obviously the above statement is useless, as I could simply write `return a === b`
    // just wanted to show how it works!
}

console.log(checkEquality(5,6));
console.log(checkEquality(7,7));

// we can go further and use nested conditions to apply more than one condition in our statement
function checkSign(a) {
    return a > 0 ? "Positive" : a < 0 ? "Negative" : "Zero";
}

console.log(checkSign("-10"));
console.log(checkSign("0"));