const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
};

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

for (let item of menu) {
  console.log(item);
}
console.log("----------------------------------------------------------------");
for (let item of menu.entries()) {
  console.log(`${item[0]+1} : ${item[1]}`);
}
console.log("----------------------------------------------------------------");
for (let [idx , desc] of menu.entries()) {
  console.log(`${idx+1} : ${desc}`);
}
