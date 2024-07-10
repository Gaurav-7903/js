'use strict';

const booking = [];

const createBooking = function(flightNum , numPassengers = 40 , price = 19_000  ){
    const newBooking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(newBooking);
}

createBooking('LH12')
createBooking('LH32', 30)
createBooking('LH14', 30 , 20_000)

// skip variable
createBooking('LH14', undefined , 20_000)