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