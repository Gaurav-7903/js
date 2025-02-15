/* Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Your tasks:

Create a function 'calcAverageHumanAge', which accepts an array of dog's ages ('ages'), and does the following things in order:
Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4
Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages)
Run the function for both test datasets
Test data:

Data 1: [5, 2, 4, 1, 15, 8, 3]
Data 2: [16, 6, 10, 5, 6, 1, 4] */

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (ages) => {
  return ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, val, i, arr) => acc + val / arr.length ,0).toFixed(2);
};

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));
