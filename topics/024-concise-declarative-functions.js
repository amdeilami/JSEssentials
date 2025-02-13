/**
 * we can have functions inside objects
 */

const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    },
    model: "kazaki"
};

console.log(bicycle.gear);
bicycle.setGear(5);
console.log(bicycle.gear);