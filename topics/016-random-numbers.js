// how to generate a random number in javascript?
// the foloowing creates a random real number between 0 and 1, excluding 1
console.log(Math.random());

// Math.floor() rounds down a number to the nearest whole number which is less than the given number
console.log(Math.floor(4.8));

// generating a random whole number between 0 and 20, excluding 20
console.log(Math.floor(Math.random()*20));

// to extend this further, we can have a function to generate a random number in our desired range
// this works for positive numbers of course
function ourRandomRange(ourMin, ourMax) {
    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
console.log(ourRandomRange(3,7));
console.log(ourRandomRange(-7,-3));