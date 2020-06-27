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
guessBtn.addEventListener('click', function() {
    
    let guess = parseInt(guessInput.value);

    // Validate input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`)
    }
})

// Set message 
function setMessage(msg) {
    message.textContent = msg;
}