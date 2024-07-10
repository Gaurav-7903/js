console.log(3 || "John");
console.log("" || "John");
console.log(true || "John");
console.log(false || "John");
console.log(undefined || "John");

console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || null || "John");

const guests = restaurant.numGuests || 10;
console.log(guests);