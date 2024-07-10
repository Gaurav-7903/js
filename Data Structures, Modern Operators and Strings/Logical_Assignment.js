const res1 = {
    name : "Capri",
    numGuests : 100,
}


const res2 = {
    name : "Hilton",
    owner : "John"
}
const res3 = {
    name : "Capri 1",
    numGuests : 0,
}

res1.numGuests = res1.numGuests || 10;
// res2.numGuests = res2.numGuests || 50;

res2.numGuests||=30;

res3.numGuests??= 10;

res2.owner&&="Hilton";

console.log(res1, res2 , res3);