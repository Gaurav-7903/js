'use strict';

var firstName = "Gaurav";

const john = {
    firstName: 'John',
    birthYear: 2000,
    isMarried: false,
    calcAge: function(){
        // console.log(this);
        console.log(2025 - this.birthYear);

        /* const self = this;
        const checkMarried = function(){
            if(self.isMarried){
                console.log('Is Married');
            }else{
                console.log('Not Married');
            }
        }
        checkMarried(); */


        const checkMarried2 =()=>{ // arrow function access this keyword of that parent element
            if(this.isMarried){
                console.log('Is Married');
            }else{
                console.log('Not Married');
            }
        }
        checkMarried2();
    },
    greet : ()=>{
        console.log(`Hey ${this.firstName}`); 
    }
}

console.log(this.firstName);
john.greet();

john.calcAge();

// arguments are supported in arrow function
