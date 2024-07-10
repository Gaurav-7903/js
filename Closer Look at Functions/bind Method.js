const lufthansa = {
    airline : 'lufthansa',
    iataCode : "LH",
    booking : [],

    book(flightNum , name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}  ${flightNum}`);

        this.booking.push({
            flight : `${this.iataCode} ${flightNum}`,
            name
        })
    },
}


const eurowings = {
    airline : 'Eurowings',
    iataCode : "EW",
    booking : [],
}

const book = lufthansa.book

const swiss = {
    airline : 'Swiss',
    iataCode : "LX",
    booking : [],
    planes : 200,
}

const bookEw = book.bind(eurowings);
const bookSwiss = book.bind(swiss);

bookEw("123", "John Doe");
console.log(eurowings);

// bind with parameters 
const bookEW23 = book.bind(eurowings , 23);
bookEW23("Smith");
bookEW23("Smith Deo");
console.log(eurowings);

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log("Before",this);
    this.planes++;
    console.log("After" ,this);
}

const buyPlane = lufthansa.buyPlane

// document.querySelector('button').addEventListener('click',buyPlane.bind(lufthansa ));


// partial application
const addTax = (rate  , tax) => tax + rate*(tax/100);
console.log(addTax(20, 1000));

// here 33 is set as rate and it not bind 
const addTax33  = addTax.bind(null , 33);
console.log(addTax33(1000));

const addTaxRate = function(rate){
    return function(tax){
        return tax + rate*(tax/100);
    }
}

const addTax20 = addTaxRate(20);
console.log(addTax20(2000));
console.log(addTax20(45000));

const addTax50 = addTaxRate(50);
console.log(addTax50(4000));