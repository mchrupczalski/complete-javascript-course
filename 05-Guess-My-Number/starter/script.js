'use strict';

const game = {
    secretNumber: 0,
    playerScore: 20,
    playerHighscore: 0,

    newGame: function (){
        this.secretNumber = Math.ceil(Math.random()*20);
        this.playerScore = 20
        console.log(game.secretNumber);
    },
}

const correctGuess = function (){
    document.querySelector('body').style.backgroundColor = '#00801c';
    showMessage(`🥳 You won!`);
    if(game.playerScore > game.playerHighscore){
        game.playerHighscore = game.playerScore;
        document.querySelector('.highscore').textContent = game.playerHighscore;
    }
}

const tooHighGuess = function (){
    showMessage(`☝️ Too high!`);
}

const tooLowGuess = function (){
    showMessage(`👇 Too low!`);
}

const showMessage = s => {
    document.querySelector('.message').textContent = s;
};

const updateGameScore = (decrement) =>{
    if(game.playerScore === 0) return;

    if(decrement) game.playerScore--;
    document.querySelector('.score').textContent = game.playerScore;
}

const gameOver = () => {
    document.querySelector('body').style.backgroundColor = '#5e2200';
    showMessage('📛 Game Over!');
};


const resetGame = () => {
    game.newGame();
    updateGameScore(false);

    document.querySelector('body').style.backgroundColor = '#222';
    showMessage('❔ Start guessing...');
};
document.querySelector('.again').addEventListener('click', function (){
    resetGame();
})


document.querySelector('.check').addEventListener('click', function () {
    const playerGuess = Number(document.querySelector('.guess').value);
    console.log(playerGuess, typeof playerGuess)

    if(!playerGuess){
        showMessage(`❌ Invalid input. Enter values between 1-20.`);
        return;
    }

    updateGameScore(true);

    if(game.playerScore === 0){
        gameOver();
        return;
    }

    switch (true) {
        case (playerGuess === game.secretNumber):
            correctGuess();
            break;
        case (playerGuess > game.secretNumber):
            tooHighGuess();
            break;
        case (playerGuess < game.secretNumber):
            tooLowGuess();
            break;
        default:
            break;
    }
});



game.newGame();