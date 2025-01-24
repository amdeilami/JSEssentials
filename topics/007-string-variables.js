// you can use " or ' or `

var firstName = "Alan";
var lastName = "Turing";

console.log(firstName+" "+lastName);

// escaped characters
var escapedChar = "Want to use \"keyboard\"?";
console.log(escapedChar);

// instead of using escaped characters, you can use other initiation and termination for strings like ` or '
var example = 'I can freely use " here';
console.log(example);

var anotherExample = `I can freely use ' and " here`;
console.log(anotherExample);

// there are other escaped characters that you can try
/* some examples:
    \t      tab
    \b      backspace
    \n      newline
    \r      carriage return
    \f      form feed
*/

var myStr = "First line \t and \nSecond line started here without carriage return and \n\rThird line with carraige return";
console.log(myStr);

// string concatenation
var exampleCon = "First part" + " Second part";
console.log(exampleCon);

// shorter way
var concatenation = "First part";
concatenation += " Third part";
console.log(concatenation);

// making new strings with existing variables
var myName = "Amir";
var sentence = "Hello my name is " + myName + " what is yours?";
console.log(sentence);

// length attribute
var lovelyName = "Ada Lovelace";
console.log(lovelyName+" has "+lovelyName.length+" characters");

// just note that semicolon is not mandatory, but I'm using it

// string indexing and access
var firstCharacter = lovelyName[0];
var thirdCharacter = lovelyName[2];
var lastCharacter = lovelyName[lovelyName.length-1];
console.log(firstCharacter+thirdCharacter);

// strings are immutable, you can't alter a single character
var helloWorld = "Jello World!";
helloWorld[0] = "H";

console.log(helloWorld);

helloWorld = "Hello World!";
console.log(helloWorld);
