"use strict";
/**
 * with using `class` keyword, we have a clean and readable way to create new objects
 */

class SpaceShuttle {
    constructor(targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}

var zeus = new SpaceShuttle('Jupiter');

console.log(zeus);
console.log(zeus.targetPlanet);

/**
 * interestingly, we can have a function that makes and returns a class!
 */

function makeClass() {
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable("carrot");

console.log(carrot);

/**
 * using getters and setters to access object elements made by class
 * by convention it is better to name private fields with `_` but obviously using `_` does not make them private!
 * in order to make a variable private, we can use `#` at the beginning of the name
 */

class Book {

    #_author; // valid private field declaration, no "let"/"const" allowed
    
    constructor(author) {
        this.#_author = author;
    }

    // we don't use `function` keyword here
    get writer() {
        return this.#_author;
    }

    set writer(newAuthor) {
        this.#_author = newAuthor;
    }
}

/**
 * getters and setters are somehow considered as properties not functions (when accessing them)
 */

const book = new Book("Alex");
console.log(book.writer);
book.writer="James";
console.log(book.writer);