const airLine = "Air India";
const plane = 'I203';
console.log(plane[1]);

console.log('Game'[1]);

//length
console.log(airLine.length);

console.log(airLine.indexOf('i'));
console.log(airLine.lastIndexOf('i'));

console.log(airLine.indexOf('di'));

console.log(airLine.slice(2 ));
console.log(airLine.slice(2 , airLine.length-1));

// retrieve first and last words from string
console.log(airLine.slice(0 , airLine.indexOf(' ')));
console.log(airLine.slice(airLine.lastIndexOf(' ')+1 , airLine.length));

console.log(airLine.slice(-2));

// convert string to array by space
const array = airLine.split(' ')
console.log(array[1]);


const checkMiddleSeat = (seat)=>{
    const row = seat.slice(-1);
    const check = row==="B" || row==="E";
    check ? console.log("you got the Middle seat") : console.log("you Lucky");
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


const str1 = "Gaurav";
const str2 = new String('Gaurav');
console.log(str1==str2);
console.log(str1===str2);


// part 2
console.log(str1.toLowerCase());

console.log(str1.toUpperCase());

const name = "gAuRaV"
console.log(name[0].toUpperCase() + name.slice(1).toLowerCase());


// email compare
const email = "gaurav2712@gmail.com";
const loginEmail = "   Gaurav2712@gmail.com \n";
console.log(loginEmail.toLowerCase().trim() === email);

// replace
const price = "123$"
console.log(price.replace('$', 'Rs.'));

let str = "The quick brown fox jumps over the lazy dog. The dog is not amused.";
let replacedStr = str.replaceAll("dog", "cat");
console.log(replacedStr);
console.log(str.replace(/dog/g, 'cat')); // using regex pattern

console.log("Gaurav".startsWith('G'));
console.log("Gaurav".startsWith('a'));

console.log("Gaurav".endsWith('G'));
console.log("Gaurav".endsWith('v'));

console.log(str.includes('dog'));
console.log(str.includes('dogs'));

// practice exercise
const checkBaggage = function(items) {
    if (items.toLowerCase().includes('knife') || items.toLowerCase().includes('gun')) {
        console.log("You are not allowed to have"); 
    }
    else {
        console.log("Happy Journey");
    }   
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// split

const sentence = "This is a sample sentence.";
const words = sentence.split(' ');
console.log(words);  

console.log(words.join('-'));

function capitalizeWord (name){
    let res = ""
    name.split(' ').forEach(word=>{
        // res += word[0].toUpperCase() + word.slice(1) + " ";
        res += word.replace(word[0] , word[0].toUpperCase()) + " ";
    })
    return res.trimEnd();
}

console.log(capitalizeWord("jessie and john doe")); 
console.log(capitalizeWord("John doe")); 


// padding string
console.log("padding string".padStart(25, "-"));
console.log("Hello".padStart(10, "World "));
console.log("Hello".padEnd(10, "World "));
console.log("Hello".padStart(10, "W"));

const maskCreditCard = (number)=>{
    const lastFourDigits = number.toString().slice(-4);
    return lastFourDigits.padStart(number.toString().length , "X");
}

console.log(maskCreditCard(1234_5678_9012_3456));
console.log(maskCreditCard(9012_3456));

// repeat

console.log("Hello  ".repeat(3));
console.log("Hello".repeat(0));
// console.log("Hello".repeat(-1)); // error

// template literals