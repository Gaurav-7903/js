const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
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
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery : function({time = "20:00" , address , mainIndex , starterIndex}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  }
};

const order = {
    time  : "22:30",
    address : "Via del",
    mainIndex : 2,
    starterIndex : 1,
}

restaurant.orderDelivery(order)

// object destructure 
const {name , mainMenu , openingHours} = restaurant;
console.log(name , mainMenu , openingHours);

// change the variables name
const {
  starterMenu: starters,
  openingHours: hours,
} = restaurant;
console.log(starters , hours);

// default values
const {menu = ["pasta"] , starterMenu : starter} = restaurant;
console.log(menu , starter);

// muting the variables
let a = 111,b=222;
const obj = {a: 12, b:45 , c:56};

({a,b} = obj);
console.log(a,b);

// nested objects
const {fri: {open , close}} = openingHours;
console.log(open , close);