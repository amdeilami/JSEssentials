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

/* other comparison operators:
    greater than    >
    less than       <
    greater than or equal   >=
    less than or equal      <=
*/

// logical AND (&&) and OR (||) operators
function betweenTwoNumbers (num1, num2, val) {
    // making sure num1 is smaller or equal
    if (num1 > num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }

    if (num1 <= val && num2 >= val) {
        return true;
    }
    return false;
}

console.log("Is 5 between 6 and 9? "+betweenTwoNumbers(9,6,5));

function testLogicalOrOperator(val) {
if (val < 10 || val > 20) {
    return "Outside";
}
return "Inside";
}

console.log(testLogicalOrOperator(15));

// `else`: when the if-stateent condition evaluates to false, else block runs
function testElse(val) {
    if (val < 5) {
        return "value is less than 5";
    } else {
        return "value is greater than or equal to 5";
    }
}
console.log(testElse(6));

// `else if` can be used to chain the conditions together
function testElseIf(val) {
    if (val > 10) {
        return "value is greater than 10";
    } else if (val < 5) {
        return "value is less than 5";
    } else {
        return "value is between 10 and 5";
    }
}

console.log(testElseIf(7));