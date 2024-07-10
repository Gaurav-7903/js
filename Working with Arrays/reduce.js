
const movement = [200 , 450 , -400 , 3000 , -650 , -130 , 70 , 1300];

// here 0 is setting a accumulator 
const bankBalance = movement.reduce((total,value)=>total + value , 0);
console.log("Total Account balance : ",bankBalance.toFixed(2));

// get the maximum amount   
const maxMovement = movement.reduce((acc , value)=>{
    return acc > value ? acc : value;
} , movement[0]);

console.log(maxMovement);