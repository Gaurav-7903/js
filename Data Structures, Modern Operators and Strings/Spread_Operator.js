const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelo Tavanti 23, Firenze, Italy",
    categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
    starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
    mainMenu: ["Pizza", "Pasta", "Risotto"],
    order: function (starterIndex, mainIndex) {
      return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
  
    orderDelivery : function({time = "20:00" , address , mainIndex , starterIndex}){
      console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta : function(ingredient1 , ingredient2 , ingredient3){
        console.log(`Here is your delicious pasta with ${ingredient1} , ${ingredient2} and ${ingredient3}`);
    }
  };

const arr = [1,2,3];

const newArr = [4,5,...arr]
console.log("newArr",newArr);


console.log(...newArr);

const [ a, b, c, d, e ] = [...newArr]
console.log(a, b, c, d,e);

// join 2 menu items
const newMenuArr= ["Panjabi" , "Gujarati" ]
restaurant.mainMenu = [...restaurant.mainMenu , ...newMenuArr];
console.log(restaurant.mainMenu);

const totalItem = [...restaurant.mainMenu , ...restaurant.starterMenu];
console.log(totalItem);

// copy arrays
const menuCopy = [...restaurant.mainMenu]

const str = "Random String"
const newStr = [...str , " " , "S."];
console.log(str , newStr);

const ingredient = ["Almond", "Ch" , "O"];
restaurant.orderPasta(...ingredient);

// with object
const newRestaurant = {...restaurant , founder : "John"}
console.log(newRestaurant);

// copy object
const newRestaurantCopy = {...restaurant}
console.log("Copy",newRestaurantCopy);