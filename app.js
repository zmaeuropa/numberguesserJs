// Games values
let min = 1 ;
    max = 10;
    winningNum = getRandomNum(min,max);
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

//Play again event listener
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

// Listen for guess
guessBtn.addEventListener('click', function() {
    
    let guess = parseInt(guessInput.value);

    // Validate input
    if (isNaN(guess) || guess < min || guess > max) {
        console.log(guess);
        setMessage(`Please enter a number between ${min} and ${max}`);
        
    }

    // Check if won
    if (guess === winningNum) {
        //Game over--won
      gameOver(true,`${winningNum} is correct You Win!`);
    } else {
        //Wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            //Game over--lost
          gameOver(false, `Game over, you lost, the correct number was ${winningNum}`);

        } else {
            //Game continues--answer wrong

            // Change border color
            guessInput.style.borderColor = 'red';
            //Clear Input
            guessInput.value = '';
            // Tell user its wrong number
            setMessage(`${guess} is not correct , ${guessesLeft} : Guesses Left`, 'red');
        }
    }
})
//Game over
function gameOver(won,msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
     // Disable input
     guessInput.disabled = true;
     // Change border color
     guessInput.style.borderColor = color;
     // Set text color
    message.style.color = color;
     // Set message
     setMessage(msg);

     //Play again
     guessBtn.value = 'Play again';
     guessBtn.className += 'play-again';

}
//Get Wining num
function getRandomNum(min,max) {
    return Math.floor(Math.random()*(max-min + 1)+min);
    
}
// Set message 
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}