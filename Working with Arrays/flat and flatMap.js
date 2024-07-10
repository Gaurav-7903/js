// create a nested array of number

let arr = [1, 2, 3, [4, 5, 6], 7, 8, 9];
console.log(arr);
console.log(arr.flat());

// create 3d array

let arr3d = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
  [
    [9, 10],
    [11, 12],
  ],
];
console.log(arr3d);
console.log(arr3d.flat());
console.log(arr3d.flat(2));

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 123,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

let accounts = [account1, account2, account3, account4];

// flat
const totalBalance = accounts.map(account => account.movements).flat().reduce((acc, value) => acc+value , 0);
console.log("Total Balance",totalBalance);

// flatMap
const totalBalance2 = accounts.flatMap(account => account.movements).reduce((acc, value) => acc+value , 0);
console.log("Total Balance",totalBalance2);



