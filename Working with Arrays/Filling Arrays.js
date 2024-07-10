const arr = new Array(4);
console.log(arr);

arr.fill(3)
console.log(arr);

const arr2 = Array.from({length: 5}, () => 3);
console.log(arr2);

const arr3 = Array.from({length: 5}, (_, i) => i);
console.log(arr3);

const arr4 = Array.from({length: 5}, (_, i) => ({id: i+1, name: `User ${i+1}`}));
console.log(arr4);

const arr5 = Array.from({length: 5}, (_, i) => ({id: i+1, name: `User ${i+1}`, age: Math.floor(Math.random() * 100)}));
console.log(arr5);

const arr6 = Array.from({length: 5}, (_, i) => ({id: i+1, name: `User ${i+1}`, age: Math.floor(Math.random() * 100), isActive: Math.random() > 0.5}))
    .filter(user => user.age >= 18 && user.isActive);
console.log(arr6);