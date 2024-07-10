// LECTURE: Values and Variables

let country = 'India';
let continent = 'Asia';
let population = 1400;

console.log(country);
console.log(continent);
console.log(population); 


// LECTURE: Data Types 

let isIsland = false; 
let language;

console.log(typeof isIsland);
console.log(typeof population); 
console.log(typeof country); 
console.log(typeof language);  


// LECTURE: let, const and var 

language = 'Hindi';
population = 1410;
console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language); 


// LECTURE: Basic Operators // Basic Operators

let halfPopulation = population / 2;
console.log(halfPopulation); 

population++;
console.log(population); 

let finlandPopulation = 6;
console.log(population > finlandPopulation)

let averagePopulation = 33;
console.log(population < averagePopulation); 


// LECTURE: Strings and Template Literals 

 let description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description); 


// LECTURE: Taking Decisions: if / else Statements 
 let temporarilyData = [13, 130]
// population = temporarilyData[0];
if(population > 33){
    console.log("Portugal's population is above average");
}else{
    console.log("'Portugal's population is 22 million below average");
} 


// LECTURE: Type Conversion and Coercion 

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2); 


// LECTURE: Equality Operators: == vs. ===

let numNeighbours = prompt('How many neighbour countries does your country have?');

if (numNeighbours == 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

numNeighbours = Number(numNeighbours);
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
} 


// LECTURE: Logical Operators
country = 'Portugal';
population = 1400; 
isIsland = false;
language = 'English';
if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}


// LECTURE: The switch Statement
language = 'english';

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}


//LECTURE: The Conditional (Ternary) Operator

country = 'Portugal';
const populationStatusCheck = (population)=>{
    return population > 33 ? `${country}'s population is above average` : `${country}'s population is below average`;
}
console.log(populationStatusCheck(population = 40));
console.log(populationStatusCheck(population = 13));
console.log(populationStatusCheck(population = 130));
console.log(populationStatusCheck(population = 40));



