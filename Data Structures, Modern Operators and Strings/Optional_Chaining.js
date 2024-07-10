const openingHours = {
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
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
console.log(restaurant);

// console.log(restaurant.openingHours.mon.open); // generateError
console.log(restaurant.openingHours.mon?.open); // optional chining
// restaurant.openingHours.mon is not available then return undefined

console.log(restaurant.openingHours.fri?.open); // optional chining


const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

for(const day of days) {
    const open = restaurant.openingHours[day]?.open || "Close";
    // console.log(open);ṇ
    console.log(`On ${open} we ${day}`);
}

console.log(restaurant.order?.(1,2) ?? "Methods dose not available");
console.log(restaurant.order1?.(1,2) ?? "Methods dose not available");

// for Array

const users = [
    {name: 'Jonas', premium: true},
    {name: 'Martha', premium: false},
    {name: 'Adam', premium: false},
    {name: 'Alice', premium: true},
];

console.log(users[0]?.name ?? "User Not available");
console.log(users[5]?.name ?? "User Not available");