// Games values
let min = 1 ;
    max = 10;
    winningNum = 2;
    guessesLeft = 3 ;

// UI elements
const game = document.querySelector('#game');
    minNum = document.querySelector('.min-num');
    maxNum = document.querySelector('.max-num');
    guessBtn = document.querySelector('#guess-btn');
    guessInput = document.querySelector('#guess-input');
    message = document.querySelector('.message');

// Assing ui min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListenner('click', function() {
    console.log(guessInput);
})