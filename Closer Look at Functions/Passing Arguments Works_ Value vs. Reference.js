const flight = 'LH34';

const jonas = {
    name : 'John',
    passport : 1236547890
}

function checkIn(flightNum , passenger){
    flightNum = 'LH34';
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 1236547890){
        console.log("Checking in");
    }else{
        console.log("Wrong Passport");
    }
}

console.log(flight , jonas);
checkIn(flight , jonas);
console.log(flight , jonas);

const newPassport = (passenger)=>{
    passenger.passport = Math.trunc(Math.random() * 1000000000)
}

newPassport(jonas);
console.log(jonas);
checkIn(flight , jonas)