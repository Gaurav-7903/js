
const oneWord = function(str){
    return str.replaceAll(' ',"").toLowerCase()
}

const upperFirstWord = function(str){
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// console.log(oneWord("Hello World")); // "helloworld"

// console.log(upperFirstWord("hello World")); // "helloworld");


//higherOrder function
const transformer = function(str , fn){
    console.log(str , fn);
    return fn(str);
}

console.log(transformer("Hello world" , oneWord)); // "helloworld

console.log(transformer("hello world" , upperFirstWord)); // "Hello World"