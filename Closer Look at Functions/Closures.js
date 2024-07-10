'use strict';

const secureBooking = function(){
    let passengerCount =0;

    return function(){
        passengerCount++;
        console.log(`${passengerCount} passengers.`);
        return passengerCount;
    }
}

const booker = secureBooking();

booker(); // 1st passenger
booker()

// more examples of closure

let f;
const g =function(){
    const a = 23;
    f = function(){
        console.log(a*2);
    }
}

const h = function(){
    const b = 77;
    f = function(){
        console.log(b*2);
    }
}

g();
h()
f();

h();
f();

// Example 2
const boardPassenger = function(n, wait){
    const perGroup = n/3;   

    setTimeout(() => {   
        console.log(`we are now boarding all ${n} passenger`);
        console.log(`There are a 3 Group , each with ${perGroup.toFixed(0)} passenger`);
    }, wait*1000);

    console.log(`Will start boarding in ${wait} second`);
}

// const perGroup = 1000;
boardPassenger(180, 1);