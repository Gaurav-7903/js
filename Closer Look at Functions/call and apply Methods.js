const lufthansa = {
    airline : 'lufthansa',
    iataCode : "LH",
    booking : [],

    book(flightNum , name){
        console.log(this.airline);
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}  ${flightNum}`);

        this.booking.push({
            flight : `${this.iataCode} ${flightNum}`,
            name
        })
    },
}

lufthansa.book(239, "Gaurav")
lufthansa.book(635, "john")

console.log(lufthansa.booking);

const eurowings = {
    airline : 'Eurowings',
    iataCode : "EW",
    booking : [],
}

const book = lufthansa.book

// // dose not work
// book(23, "Gaurav")

book.call(eurowings , 23 , "sarah")
console.log(eurowings);

book.call(lufthansa , 345 , "Marry")
console.log(lufthansa);


const swiss = {
    airline : 'Swiss',
    iataCode : "LX",
    booking : [],
}

book.call(swiss , 56 , "Harry")
console.log(swiss);

// call , apply and bind


// apply ( pass the data into array)
const flightData = [534 , "Cooper"]

book.apply(swiss , flightData) 
book.apply(swiss , [453 , "Joker"])
console.log(swiss); 