const arr = ["Pizza", "Pasta" , "pizza", "Pasta"];
console.log(arr);

// for arrays
const food = new Set(arr);
console.log(food);

// for strings
console.log(new Set("Gaurav"));

console.log(food.size);

console.log(food.has("Pizza"));
console.log(food.has("Burger"));

food.add("Burger");
console.log(food);

food.delete("pizza");
console.log(food);

// clear set
// food.clear();
// console.log(food);

for(const item of food){
    console.log(item);
}

// example
const staff = ["waiter", "chef", "manager", "chef" , "manager", "chef" , "waiter"];
console.log(staff);

const staffSet = new Set(staff);
console.log(staffSet);

// convert set object into array
const staffArray = [...new Set(staff)];
console.log(staffArray);

console.log(staffSet.size);

