// functions are re-usable code blocks, easy!
function printHello(){
    console.log("Hello!");
}

printHello();
printHello();
printHello();

// passing values to functions with arguments
function printSum(a, b) {
    console.log(a+b);
}

printSum(10,12);


// scope: visibility of variables
var myGlobal = 10;

function fun1() {
    oopsGlobal = 5; // since we didn't use `var` keyword, this variable is global! interesting!
    /* note that although `oopsGlobal` is being considered as global variable,
       we cannot start using it unless we call this function at least once!
    */
    var localVariable = 2; // this is a local variable that cannot be accessed outside of this function
}

function fun2() {
    console.log("The value of myGlobal is "+myGlobal);
    console.log("The value of oopsGlobal is "+oopsGlobal);
    // next line raises an error if you uncomment it
    // console.log("The value of localVariable defined in fun1 is "+localVariable);
}

fun1();
fun2();

// you can have a local and global variable with the same name in your script
// in this case, in the local scope (the scope which the local variable can be used) the value of local variable has precedence
var outerWear = "T-shirt";

function fun3() {
    var outerWear = "sweater";

    return outerWear;
}

console.log(fun3());
console.log(outerWear);

// functions don't necessairly have to return a value
// so sometimes, when we don't have `return` statement, the return value of the function is actually `undefined`
var sum = 0;
function fun4(num) {
    sum += num;
}
console.log(fun4(4));