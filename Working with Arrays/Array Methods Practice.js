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

// 1
const totalDeposit = accounts
  .flatMap((account) => account.movements)
  .filter((value) => value >= 0)
  .reduce((acc, value) => acc + value, 0);
console.log(totalDeposit);

//2 num od deposit 1000

const deposit1000 = accounts
  .flatMap((account) => account.movements)
  .filter((value) => value >= 1000).length;
console.log(deposit1000);

const deposit1000Reduce = accounts
  .flatMap((account) => account.movements)
  .reduce((count, value) => (value >= 1000 ? ++count : count), 0);
console.log(deposit1000Reduce);

//3
const sum = accounts
  .flatMap((account) => account.movements)
  .reduce(
    (acc, value) => {
      value > 0 ? (acc.deposit += value) : (acc.withdraw += value);
      return acc;
    },
    { deposit: 0, withdraw: 0 }
  );
console.log(sum);

// 4
const convertTitle = function (title) {
  const exceptions = ["and","as","but","for","if","nor","or","so","yet","a","an","the","as","at","by","for","in","of","off","on","per","to","up","via"];

  return title.toLowerCase().split(" ").map((word) =>!exceptions.includes(word)? word.charAt(0).toUpperCase() + word.slice(1): word).join(" ");
};

console.log(convertTitle("this is a nice title"));
console.log(convertTitle("this is a LONG title but too LONG"));
console.log(convertTitle("and here is another title with An EXAMPLE"));
