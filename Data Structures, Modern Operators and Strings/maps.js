const restaurant = new Map();

restaurant.set('name', 'The Rusty Anchor');
restaurant.set('description', 'The restaurant that will serve this restaurant with its name and description');
restaurant.set(1 , "Italy");
console.log(restaurant);

restaurant.set('categories', ['italic']).set('open' , 10).set('closed' ,23).set(true , 'We are Open :)').set(false , 'We are Closed');
console.log(restaurant);


console.log(restaurant.get('name'));

const timeHour = new Date().getHours();
console.log(restaurant.get(timeHour>=restaurant.get('open') && timeHour<= restaurant.get('closed')));

console.log(restaurant.has('description'));

console.log(restaurant);
restaurant.delete(1);
console.log(restaurant);

console.log(restaurant.size);

const arr = [1,2]
restaurant.set(arr, "set Array")
console.log(restaurant);
console.log(restaurant.get(arr));

// map iteration 
const question = new Map([
    ['question' , 'What is best programming language'],
    [1 , 'C'],
    [2 , 'Java'],
    [3 , 'JavaScript'],
    ['Correct' , 3],
    [true , "Correct"],
    [false , "Try Again"]
])
console.log(question);

const newObject = {
    name : 'The Rusty Anchor',
    openingHours : {
        Monday : 10,
        Tuesday : 11,
        Wednesday : 12,
        Thursday : 13,
        Friday : 14,
        Saturday : 15,
        Sunday : 16
    }
}
// convert object to map
const openingHour = new Map(Object.entries(newObject));
console.log(openingHour);


console.log(question.get('question'));
for(const [key , value] of question){
    if(typeof key === 'number')
    console.log(key + ': ' + value);
}

const answer = 3;

console.log(question.get(question.get('Correct')===answer));


// convert map to array
const newArray = [...question]
console.log(newArray);


// 4 data structures
// array , set , object , map