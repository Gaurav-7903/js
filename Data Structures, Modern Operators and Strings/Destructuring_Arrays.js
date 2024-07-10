"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [1,2,3];
const [a,b,c] = arr // destructure array(unpacking)
console.log(a,b,c);

let [first , , third]  = restaurant.categories;
console.log(first , third);

let [mainCourse, secondaryCourse] = restaurant.mainMenu;
console.log(mainCourse, secondaryCourse);
[mainCourse, secondaryCourse] = [secondaryCourse , mainCourse]
console.log(mainCourse, secondaryCourse);


const [stater , main] = restaurant.order(2,0);
console.log(stater , main);

// first ans last element access from n length array
/* function getFirstAndLast(array) {
  if (array.length === 0) {
    return { first: undefined, last: undefined };
  }
  const [first, ...rest] = array;
  const last = rest.length > 0 ? rest[rest.length - 1] : first;
  return { first, last };
}

const array = ["first", "second", "third", "fourth", "last"];
const { first, last } = getFirstAndLast(array);

console.log(first);
console.log(last);  */

// nested arrays destructure
const nestedArray = [2 , 3,[5,8]];
const [i , , [j,k]] = nestedArray;
console.log(i,j,k);

// default values
const [p=1 ,q=1, r=1] = [5,6]
console.log(p,q,r);
