const movement = [200 , 450 , -400 , 3000 , -650 , -130 , 70 , 1300];

console.log(movement.sort()); // muted array

console.log(movement);

movement.sort((a,b)=>{
    return a-b; // ascending order
})
console.log(movement);