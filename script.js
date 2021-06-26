let guessButton = document.querySelector('.button1');
let againButton = document.querySelector('.button2');
let numberReveal = document.querySelector('#numberR');
let userGuess = document.querySelector('.inputGuess');
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let highscore = document.querySelector('.highscore');

var highScoreTotal = 0;
document.querySelector('.button2').setAttribute('disabled', 'disabled');

function getRandomNumber() {
    console.log('getRandomNumber() - Get a random number between 1-20');
    return Math.floor(Math.random() * 21);
}

function printRandomNumber(number) {
    console.log(`printRandomNumber() - The random generated Number is: ${number}`);
}

var randomInt = getRandomNumber();
printRandomNumber(randomInt);

document.querySelector('.button1').addEventListener
    ('click', function () {
        console.log(`User Input Value: ${userGuess.value}`);
        againButton.removeAttribute('disabled');
        if (userGuess.value == randomInt) {
            message.textContent = 'That guess was correct!';
            message.style.color = 'white';
            if (score.textContent > highScoreTotal) {
                highScoreTotal = score.textContent;
                highscore.textContent = highScoreTotal;
                numberReveal.textContent = randomInt;
            }
            document.querySelector('body').style.backgroundColor = '#60b347';
            guessButton.setAttribute('disabled', 'disabled');
        }

        else if (userGuess.value > randomInt) {
            message.textContent = 'Too High!';
            message.style.color = 'red';
            userGuess.textContent = '';
            score.textContent -= 1;
        }

        else if (userGuess.value < randomInt && score.textContent >= 1) {
            message.textContent = 'Too Low!';
            message.style.color = 'red';
            userGuess.textContent = ' ';
            score.textContent -= 1;
        }

        else {
            message.textContent = 'You have lost the game...';
            guessButton.setAttribute('disabled', 'disabled');
        }
    });

document.querySelector('.button2').addEventListener
    ('click', function () {
        console.log('Play Again');
        guessButton.removeAttribute('disabled');
        score.textContent = 20;
        numberReveal.textContent = '?';
        document.querySelector('body').style.backgroundColor = 'rgb(44, 44, 44)';
        randomInt = getRandomNumber();
        printRandomNumber(randomInt);
        userGuess.value = '';
        message.textContent = 'Start Guessing!';
        message.style.color = 'white';
    });
