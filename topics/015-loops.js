// while loop
var myArray = [];

var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(myArray);
// using splice() to remove multiple (in this case, all elements) of an array
myArray.splice(0,myArray.length);
console.log(myArray);

// for loop
for (var i = 0; i < 5; i++) {
    myArray.push(i);
}

console.log(myArray);

// the `step` we take in each iteration of a loop shouldn't neccessairly be one, it can be any number
myArray.splice(0, myArray.length);

for (var i = 1; i < 10; i+=2) {
    myArray.push(i);
}

console.log(myArray);

// nested loops
var twoDimArray = [[1,2], [3,4], [5,6]];

function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr[i].length; j++){
            product *= arr[i][j];
        }
    }
    return product;
}
console.log(multiplyAll(twoDimArray));

// do-while loops
// similar to while loop, except that it always executes the loop body once then checks the condition
myArray.splice(0, myArray.length);
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5);

console.log(myArray);