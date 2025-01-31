// objects are like arrays, expect that instead of index, we use `properties`
// somehow like Map in other programming languages (not exactly)
var myDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!", "nothing!"]
};

// accessing object values with `.` notation
console.log(myDog.name);
console.log(myDog.tails);

// we can also use `[]` to access values
// using it is necessary when the property has `space` in it
var myClothes = {
    "good shirt": "Polo",
    "awesome socks": "H & M",
    "jacket": "CK"
};

console.log(myClothes["good shirt"]);
console.log(myClothes['awesome socks']);

// accessing object properties with variables
var playerNumber = 16;
var teamList = {
    12: "Jones",
    16: "McLauren",
    17: "Johnson"
};

console.log(teamList[playerNumber]);

// updating object values
myDog.name = "Happy Camper";
myDog["friends"] = ["Jackie"];

console.log(myDog.name);
console.log(myDog.friends);

// add new properties to an object
myDog["bark"] = "woof!";
console.log(JSON.stringify(myDog));

// delete properties from an object with `delete` keyword
delete myDog.bark;
console.log(JSON.stringify(myDog));

/* we can check whether an object has a certain property by 
   using `hasOwnProperty` followd by 
   the name that we are looking for 
*/

function checkProp(propValue) {
    if (myDog.hasOwnProperty(propValue)) {
        return myDog[propValue];
    }
    return "Property not found!";
}

console.log(checkProp("bark"));
console.log(checkProp("name"));






