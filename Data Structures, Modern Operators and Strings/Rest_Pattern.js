const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
  
    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    openingHours: {
        thu: {
          open: 12,
          close: 22,
        },
        fri: {
          open: 11,
          close: 23,
        },
        sat: {
          open: 0, // Open 24 hours
          close: 24,
        },
    }
  };
// spread because of the right hand side of  =
const arr = [1,2,...[3,4]];
console.log(arr);

// Rest operator because of the left hand side of  =
const [a,b , ...c] = [1,2,3,4,5,6];
console.log(a,b , c);

const [pizza , , risotto , ...other] = [...restaurant.mainMenu , ...restaurant.starterMenu]; // pasta skipping
console.log(pizza , risotto , other);

const {sat , ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// 2) function
function add(...arr){
    return arr.reduce((a,b) => a+b);
}
console.log(add(3+4+5));
console.log(add(3+4+5+4+7+2));
console.log(add(...c));