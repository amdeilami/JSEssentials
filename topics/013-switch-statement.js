// instead of using if-else chains, we can use `switch-case` statement sometimes
// `switch-case` statement uses STRICT EQUALITY to do the comparisons
// note the importance of `break` statement


// the following function accepts a number between 1 and 3, and returns the equivalent word
function convertiDigitToWord(num) {
    var answer = "";

    switch(num) {
        case 1:
            answer = "One";
            break;
        case 2:
            answer = "Two";
            break;
        case 3:
            answer = "Three";
            break;
        default:
            answer = "not a number or number is out of range!";
            break;
    }

    return answer;
}

console.log(convertiDigitToWord(2));
console.log(convertiDigitToWord(7));

// what if multiple inputs should have same result in a switch statement?
// we simply just get rid of `break`
function testingSwitch(val) {
    var answer = "";

    switch(val) {
        case 1:
        case 2:
        case 3:
            answer = "3 or below";
            break;
        case 4:
            answer = "four";
            break;
        default:
            answer = "unknown";
            break;
    }

    return answer;
}

console.log(testingSwitch(3));
console.log(testingSwitch(4));