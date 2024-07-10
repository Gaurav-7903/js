"use strict";

// selecting elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const currentScore0El = document.getElementById("current--0");
const currentScore1El = document.getElementById("current--1");

const dice = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores ,currentScore , activePlayer;

function initGame(){
    scores = [0, 0]
    currentScore = 0
    activePlayer = 0

    // setting elements
    score0El.textContent = 0;
    score1El.textContent = 0;

    // show elements
    btnHold.classList.remove("hidden");
    btnRoll.classList.remove("hidden");
    dice.classList.add("hidden");

    // set current score and score to 0
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentScore0El.textContent = 0;
    currentScore1El.textContent = 0;

    // active players
    player0El.classList.add('player--active')
    player1El.classList.remove('player--active')
}

const disableButton = ()=>{
    btnRoll.classList.add('btn-disabled')
    btnRoll.setAttribute('disabled', 'disabled')
}

const enableButton = ()=>{
    btnRoll.classList.remove('btn-disabled')
    btnRoll.removeAttribute('disabled')
}

const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    player0El.classList.toggle("player--active");
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player1El.classList.toggle("player--active");
};

// rolling dice
btnRoll.addEventListener("click", () => {
    // generating random dice roll
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    dice.classList.remove("hidden");

    disableButton();
    const rollDice = () => {
        const randomDice = Math.trunc(Math.random() * 6) + 1;
        dice.src = `dice-${randomDice}.png`;
    };

    const rollInterval = setInterval(rollDice, 50); 

    setTimeout(() => {
        enableButton()
        clearInterval(rollInterval); 
        dice.src = `dice-${diceNumber}.png`; 
        if (diceNumber === 1) {
            switchPlayer();
        } else {
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
    }, 1000); 
});

// hold button
btnHold.addEventListener("click", function () {

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // check if player won
    if (scores[activePlayer] >= 50) {
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
        document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        dice.classList.add("hidden");
        btnRoll.classList.add("hidden");
        btnHold.classList.add("hidden");
    } else {
        switchPlayer();
    }
});

btnNew.addEventListener("click", function () {
    // clear winner state
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    initGame();
});

// initialize game
initGame();