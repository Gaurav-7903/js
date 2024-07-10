const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = "20:00",
    address,
    mainIndex,
    starterIndex,
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ingredient1, ingredient2, ingredient3) {
    console.log(`Here is your delicious pasta with ${ingredient1} , ${ingredient2} and ${ingredient3}`);
  },
};

// Short Circuiting
/* console.log(3 || "John");
console.log("" || "John");
console.log(true || "John");
console.log(false || "John");
console.log(undefined || "John");

console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || null || "John");

const guests = restaurant.numGuests || 10;
console.log(guests); */

console.log("-----AND-----");

console.log(null && "John");
console.log(3 && "John" && "G");
console.log("--" && "John" && null &&"G"); 

const order = restaurant.orderPasta && restaurant.orderPasta("Pasta" ,"Past" ,"Pasta");