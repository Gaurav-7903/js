
const greet = function (greetings) {
    return function(name){
        console.log(`${name} ${greetings}`);
    }
}

const greeterHey = greet('Hey');
const greeterHello = greet('Hello');

greeterHey('John'); // Hey John
greeterHello('Jane'); // Hey Jane

greet('Hello')("Gaurav")    


const greetArr = greeting => name => console.log(`${name} ${greeting}`);

const greeterHeyArr = greetArr('Heyyyyy');
greeterHeyArr('John'); // Hey John