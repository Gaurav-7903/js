const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const guests = restaurant.numGuests || 10;
console.log(guests);

// nullish : only null and undefined are considered (NOT 0 or '')
const correctGuests = restaurant.numGuests ?? 10;
console.log(correctGuests);
