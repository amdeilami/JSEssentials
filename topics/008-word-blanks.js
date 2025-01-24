// using function here but it will be explained later
function wordBlanks(winner, prize) {
    var result = "";

    result += "Congradulations " + winner +"! "+"you won a " + prize;

    return result;
}

console.log(wordBlanks("Amir", "bike"));
console.log(wordBlanks("John", "laptop"));