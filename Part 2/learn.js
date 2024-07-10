'use strict';
// use of strict mode

// function
function function_name() {
    console.log("Hello world!");
}
// calling function
function_name()

function Demo(param) {
    return param
}

// function decoration and expression
console.log(Demo());
console.log(Demo(23));
console.log(Demo());

// arrow functions
const print = (param) => {
    console.log(param);
}

// function calling another function
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apple, oranges) {
    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

//Reviewing Functions
const calcAge = (birthYear) => new Date().getFullYear() - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 60 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    }
    else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}
yearsUntilRetirement(2003 , "Gaurav")

// arrays
const friends = ["John" , "Doe" , "Peter"]
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[1]);
console.log(friends.length);
console.log(years[years.length-1]);

const mixed = ["John" , "Doe" , "Peter" , 34 , {"year" : 2001,} , null , undefined , 0 , false];
console.log(mixed);

console.log(years + 10);
console.log(years - 10);

// array methods
console.log(friends);
friends.push("Mary");
console.log(friends);

friends.unshift("Michael");
console.log(friends);

friends.pop();
console.log(friends);

friends.shift()
console.log(friends);

console.log(friends.indexOf("Mary"));
console.log(friends.indexOf("Doe"));

console.log(friends.includes("Peter"));


// objects
const jonas = {
    firstName : "John",
    lastName : "Doe",
    birthYear : 1991,
    job : "teacher",
    friends : ["Mary" , "Bob" , "John"],

    calcAge : function(){
        return new Date().getFullYear() - this.birthYear;
    },

    getSummary : function(){
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.friends.length} friends.`;
    }
}
console.log(jonas);

// brackets and dot operators

console.log(jonas.firstName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

jonas.location = "India"
jonas["email"] = "john@gmail.com"
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends ans his best friend is ${jonas.friends[1]}`);

// object methods

console.log(jonas.calcAge());
console.log(jonas["calcAge"]());

console.log(jonas.getSummary());

// loops

for(let i=1 ; i< 5;i++){
    console.log(i);
}

// Looping Arrays, Breaking and Continuing
const typeofMixed = []
for(let i=0 ; i<mixed.length;i++){
    console.log(mixed[i]);
    typeofMixed.push(typeof(mixed[i]));
}
console.log(typeofMixed);


// Looping Backwards
for(let i=friends.length-1 ;i>=0 ;i--){
    console.log(friends[i]);
}

// while loop
let rep=1;
while(rep <=5){
    console.log(rep++);
}

let dice = Math.trunc(Math.random()*6) +1;
while(dice!==6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6) +1;
}


