// map : function return a new array
// filter : based o condition if it true return 

const movement = [200 , 450 , -400 , 3000 , -650 , -130 , 70 , 1300];


const eurToUSD = 1.5;

// map function to convert euro to USD
const convertedMovements = movement.map(movement => (movement * eurToUSD).toFixed(3));
console.log(convertedMovements);

const movementHistory= movement.map((value , idx) =>{
    return `Movement ${idx+1} : ${Math.abs(value)} is ${value>0 ? 'Deposited' : 'Withdraw'}`;
})
console.log(movementHistory);