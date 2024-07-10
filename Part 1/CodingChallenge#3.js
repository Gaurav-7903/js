/* 
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy! \

Your tasks: 
1. Calculate the average score for each team, using the test data below 
2. Compare the team's average scores to determine the winner of the competition,and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score) 

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy 

Test data: 
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110 
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123 
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 
GOOD LUCK  */

const data = {
    "dolphins" : {
        score1 : (96+108+89)/3,
        score2 : (97+112+101)/3,
        score3 : (97+112+101)/3
    },
    "Koalas" : {
        score1 : (88+91+110)/3,
        score2 : (109+95+123)/3,
        score3 : (109+95+106)/3
    }
}

const dolphinsScore =data.dolphins.score1;
const KoalasScore = data.Koalas.score1;

console.log(`Dolphin Average Score : ${dolphinsScore.toFixed(2)} `);
console.log(`Koalas Average Score : ${KoalasScore.toFixed(2)}`);

// it's proper working but below is better
/* if(dolphinsScore > KoalasScore) console.log("Dolphin team Won Trophy");
else if(KoalasScore > dolphinsScore) console.log("Koalas team won Trophy");
else console.log("Match Draw"); */

// Bonus Task

if(dolphinsScore > KoalasScore && dolphinsScore>=100) console.log("Dolphin team Won Trophy");
else if(KoalasScore > dolphinsScore && KoalasScore >= 100) console.log("Koalas team Won Trophy");
else if(KoalasScore===dolphinsScore && dolphinsScore>=100 && KoalasScore>=100) console.log("Match Draw");
else console.log("No one wins");
