
const arr = [1,2,3,4,5];

console.log(arr);


// adding prototype
Array.prototype.double = function(){
    return this.map(el => el * 2);
}

console.log(arr.double());

console.log(Array.prototype.double);