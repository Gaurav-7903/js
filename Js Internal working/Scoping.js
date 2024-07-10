'use strict';

function calcAge(birthYear){
    const age = 2024-birthYear;

    function printAge(){
        const output = `you age ${age} and born in ${birthYear}`;
        console.log("Printing output" , output);

        if(birthYear>=1981 && birthYear<=1996){
            var millennial = true;
            const str = `oh and you're a millennial ,${firstName} `;
            console.log(str);


            function add(a,b) {
                return a + b;
            }
            console.log(add(4+6));
        }
        //console.log(add(3,5));  // not enable in strict mode
        console.log(millennial);
        return output;
    }
    printAge();
    return age;
}

const firstName = "Gaurav";
console.log(calcAge(1991));