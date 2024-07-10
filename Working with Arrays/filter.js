

const movement = [200 , 450 , -400 , 3000 , -650 , -130 , 70 , 1300];

// filter function to filter out negative numbers
const DepositMovement = movement.filter(mov => mov>0);
const WithdrawMovement = movement.filter(mov => mov<0);

console.log("Withdraw Movement : ",WithdrawMovement);  // negative numbers are removed
console.log("Deposit Movement : ",DepositMovement);