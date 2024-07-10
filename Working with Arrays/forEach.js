// forEach method
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for of loops

/* for (const movement of movements) {
    if(movement>0){
        console.log(`You deposited ${movement}`);
    }else{
        console.log(`You withdraw ${Math.abs(movement)}`);
    }
}
 */

// continue and break are not wor in foreach loops
movements.forEach((value, index) => {
  if (value > 0) {
    console.log(`Movement ${index} : You deposited ${value}`);
  } else {
    console.log(`Movement ${index} : You withdraw ${Math.abs(value)}`);
  }
});

// forEach with map and set
// Lecture
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach((value, key , map) => {
    console.log(`${key} : ${value}`);
});

// set
console.log("ForEach with set".padStart(25 , '-').padEnd(40,'-'));
const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'Pound' , 'USD' , 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach((value, _ , map) => {
    console.log(`${value} ${map}`);
});