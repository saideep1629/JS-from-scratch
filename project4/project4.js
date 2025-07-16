
const randomNumber = Math.floor(Math.random() * 100 + 1);
// console.log(randomNumber);
const userInput = document.querySelector('#guessField');

const guessList = document.querySelector('.guesses');
const guessRemaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');
const submit = document.querySelector('#subt');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
   submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
   })
}

//validate guess 
const validateGuess = (guess) => {
    if(!guess || isNaN(guess)){
       alert('Please enter a valid number');
    }
    else if(guess < 1 || guess > 100){
        alert('Please enter a valid number between 1 and 100');
    }
    else{
        if(numGuess > 10){
            displayGuess(guess);
            displayMsg(`Game over. Random number was ${randomNumber}`);
            endGame();

        }
        else{
            prevGuess.push(guess);
            displayGuess(guess);
            numGuess++;
            checkGuess(guess);
        }
    }
}

//check guess 
const checkGuess = (guess) => {
    if(guess === randomNumber){
        displayMsg("you guess it right!!!!!!");
        endGame();
    }
    else if(guess < randomNumber){
        displayMsg("guess is too low than random number")
    }
    else if (guess > randomNumber){
        displayMsg("guess is too high than random number");
    }
}

//display message
const displayMsg = (msg) => {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

//display guess
const displayGuess = (msg) => {
    userInput.value = '';
    guessList.innerHTML = prevGuess;
    guessRemaining.innerHTML = `${11 - numGuess}`

}

//new game
const endGame = () => {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

//end game
const newGame = () => {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e) => {
        randomNumber = Math.floor(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessList.innerHTML = '';
        guessRemaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        lowOrHi.innerHTML = '';
        playGame = true;
    })

}