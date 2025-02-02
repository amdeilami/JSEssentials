// elements of an array are not of the same type necessairly
var exampleArray = ["John",23];

// nested or multi-dimensional array
var nestedArray = [["Mark",101],["Kevin",106879]];

// accessing array elements
var secondElement = exampleArray[1];
console.log(secondElement);

// unlike strings, you can change a single element of an array
exampleArray[0] = 456;
console.log(exampleArray[0]+" "+exampleArray[1]);

// console.log prints arrays simpler and better than what I did above
console.log(exampleArray);

// acessing multi-dimensional arrays
var myArray = [[1,2,3], [4,5,6], [7,8,9],[[10,11,12],13,14]];
console.log(myArray[2][0]);
console.log(myArray[3][0][2]);

// appending an element to an array with push function
myArray.push([99,100]);
console.log(myArray);

// removing last element of an array with pop function
var removedElement = myArray.pop();
console.log(removedElement);
console.log(myArray);

// removing first element of an array with shift function
removedElement = myArray.shift();
console.log(removedElement);
console.log(myArray);

// adding an element to the beginning of an array using unshift function
var addElement = "Joe";
myArray.unshift(addElement);
console.log(myArray);

// if we don't know wheter an array has already been defined or not, and we want to append an element to it:
var mysteriousArray;
console.log(mysteriousArray);
// pushing an integer to it
mysteriousArray = mysteriousArray || []; // this is the main point!
mysteriousArray.push(5);
console.log(mysteriousArray);