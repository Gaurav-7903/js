'use strict';

console.log(this);

const calcAge = function(birthYear){
    console.log(2025 - birthYear);
    console.log(this);
}

const calcAgeArrow = birthYear => {
    console.log(2025 - birthYear);
    console.log(this); // in this case this refers to the parent this element (lexical this keyword) => refer windows because it parent for this arrow function
}

calcAge(1991);
calcAgeArrow(1990);


console.log("This keyword with method");
const john = {
    firstName: 'John',
    birthYear: 2000,
    calcAge: function(){
        console.log(this);
        console.log(2025 - this.birthYear);
    }
}

const mike = {
    firstName: 'Mike',
    birthYear: 2003,
}

john.calcAge();
console.log(mike);
mike.calcAge = john.calcAge;
console.log(mike);
mike.calcAge();

const f = john.calcAge;

f.birthYear = 2008;
console.log(f);