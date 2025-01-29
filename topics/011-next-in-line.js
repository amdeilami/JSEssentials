/* in this script, we want to simulate 
    an operation in `queue` by array features that 
    we have already leaned.
*/

/*
    input: 
            arr --> an array that we treat as our queue
            item --> the item that we want to add to the end of the queue
    returns:
            the first item of the queue, and the item should be popped
*/
function nextInLine (arr, item) {
    arr.push(item);
    return arr.shift();
}

arr = [1, 2, 3, 4, 5];

console.log("Before: "+JSON.stringify(arr));
nextInLine(arr,6);
console.log("After: "+JSON.stringify(arr));