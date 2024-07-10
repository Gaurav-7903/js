const movement = [200 , 450 , -400 , 3000 , -650 , -130 , 70 , 1300];

console.log(movement.includes(-130));
console.log(movement.includes(-1305));

console.log(movement.some((mov)=> mov > 1000));
console.log(movement.some((mov)=> mov === 1000));


console.log(movement.every((mov)=> mov > 0));
console.log(movement.every((mov)=> mov > -1000));