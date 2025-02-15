/**
 * Write a program that receives a list of variable names written in underscore_case and convert them to camelCase. 
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed. 
Test data (pasted to textarea, including spaces): 
underscore_case 
first_name 
Some_Variable  
calculate_AGE 
delayed_departure 
Should produce this output (5 separate console.log outputs): 
underscoreCase      ✅ 
firstName           ✅✅ 
someVariable        ✅✅✅ 
calculateAge        ✅✅✅✅ 
delayedDeparture    ✅✅✅✅✅ 
Hints: 
Remember which character defines a new line in the textarea 
The solution only needs to work for a variable made out of 2 words, like a_b 
Start without worrying about the name conversion working ✅.
Tackle that only after you have the variable 
 */

document.body.append(document.createElement('textarea')); 
document.body.append(document.createElement('button'));
document.querySelector('button').textContent = "Click Me!";

document.querySelector('button').addEventListener('click', function() {
    let text = document.querySelector('textarea').value;
    let lines = text.split('\n');
    console.log(text , lines);

    lines.forEach(function(line , index) {
        let words = line.split('_');
        let camelCase = words.map(function(word, index) {
            if (index > 0) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            } else {
                return word;
            }
        }).join('');
        console.log(camelCase.padEnd(20 , ' ') + "✅".repeat(index+1)); 
    })
})