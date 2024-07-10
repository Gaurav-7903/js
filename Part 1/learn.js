// let var const

// let and const is not support hoisting  (reason : temporal dead zone)
// var supports hoisting

// operator
/* console.log(2**4);
let num = 2;
console.log(num++, ++num);

const firstName = "Gaurav";
const lastName = "Vadhavana"

console.log(firstName < lastName); */

// condition statements
/* const age = 17;
const isEligible = age>=18;

if(isEligible){
    console.log("Eligible");
}else{
    console.log("Not Eligible");
    console.log(`${18-age} year left`);
} */


// type conversions
/* const year = '1881';
const num = 2003;
const str = "year"
console.log(year + 18);
console.log(Number(year)+18);
console.log(Number(str));
console.log(String(num));
console.log(typeof NaN); */



// Truthy and Falsy Values
// 5 falsy values : '' , 0 , undefined , null , NaN

/* console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean({}));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
} */


// === OR ==
// === : match the data type also
// == : just match the value of data

/* console.log(18===18);
console.log(18=='18');
console.log(18==='18'); */

// boolean login

/* const a = false;
const b = true;
console.log(a || b);
console.log(a && b);
console.log(a , !a);
console.log(b , !b);
console.log(!a || b); */

// switch case
/* const day = "sunday";

switch(day){
    case "monday" : 
        console.log("Meeting day");
        break;
    case "tuesday" :
    case "wednesday" :
        console.log("working day");
        break;
    case "thursday" :
        console.log("Submitting task ");
        break;
    case "friday" :
        console.log("Bug Fixing");
        break;
    case "saturday" :
    case "sunday" :
        console.log("weekends");
        break;
    default : 
        console.log("Invalid day");
}
 */

// statement ans expression


// ternary operator
const age = 17;
const date = new Date();
const hour = date.getHours()
const message = age>=18 ? "Congratulations you are eligible" : "You are not eligible";
console.log(message);
console.log(`Hello Good ${hour < 12 ? "Morning" : hour < 19 ? "Evening" : "Night"}`);