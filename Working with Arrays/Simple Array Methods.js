"use strict";

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];




let arr  = ['a' , 'b' , 'c' , 'd' , 'e' , 'f']

// slice method
console.log(arr.slice(3));
console.log(arr.slice(2, 5));
console.log(arr.slice(-2));
console.log(arr.slice(1,-2));

// splice method (muted operation)
let newArr = arr.slice();
newArr.splice(1 ,3 , 'p' , 'q' , 'r' , 's'); // 1 is staring position , 3 is number of count , rest is adding new element
// console.log(newArr);

// reverse
let arr2 = ['g' ,'f' ,'r' ,'t' ,'a' ,'e' , 'x'];
arr2.reverse(); // reverse);
console.log(arr2);


// concat method
let concatArr = arr.concat(arr2);
console.log(concatArr);

// join method (muted operation)

let joinedArr = concatArr.join(' - ');
console.log(joinedArr);

// at method
console.log(arr[6]);
console.log(arr.at(6));
console.log(arr.at(2));

console.log(arr[arr.length - 1]);
console.log(arr.at(-1)); // so it's helpful for negative indexing
