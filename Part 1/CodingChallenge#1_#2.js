/* Task 1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: 
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter). 

Your tasks: 
1. Store Mark's and John's mass and height in variables 
2. Calculate both their BMIs using the formula (you can even implement both versions) 
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John. 

Test data: 
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall. 
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. 
GOOD LUCK  
*/

function BMICalculation(height , weights){
    return weights / height**2
}

const mark = { "height" : 1.69, "weights" : 78 }
const john = { "height" : 1.95, "weights" : 92 }

const mark1 = { "height" : 1.88 , "weights" : 95}
const john1 = { "height" : 1.76, "weights" :85}

const markBMI = BMICalculation(mark.height , mark.weights).toFixed(2)
const johnBMI = BMICalculation(john.height , john.weights).toFixed(2)
const markHigherBMI = markBMI>johnBMI
console.log(`Mark BMI is ${markBMI}`);
console.log(`John BMI is ${johnBMI}`);



/*  Task 2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it. 
Your tasks: 
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 
2. Use a template literal to include the BMI values in the outputs. 
Example: "Mark's BMI (28.3) is higher than John's (23.9)!" 
Hint: Use an if/else statement 
GOOD LUCK  
*/

console.log(`${markHigherBMI ? "Mark's BMI is higher than John's!" : "John's BMI is higher than Mark's!"}`);
if(markHigherBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
