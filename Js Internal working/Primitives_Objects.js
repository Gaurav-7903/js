// primitives data type (primitive value)
let age = 30
let oldAge = age
age = 31;
console.log(oldAge);
console.log(age);


// object datatype (Reference)
const jonas = {
    name  : 'John',
    age   : 30,
    job   : 'teacher',
}

const harry = jonas;

harry.age = 20;


console.log("Jonas",jonas);
console.log("Harry",harry); // reason : object are reference type (object , array , function , ... )

/**
 * primitive data type are store in call stacks
 * object data type are store in heap memory
 * reference : same address pointed in memory
 * primitive : different memory address point
 */


// copying object
const  william = {
    name : 'william',
    age  : 30,
    friends : ["John", "mary"]
}

const newWilliam = Object.assign({}, william);

newWilliam.age = 50;
newWilliam.friends.push("Jessica");

console.log(william);
console.log(newWilliam);   // array is also same reference so change in both objects