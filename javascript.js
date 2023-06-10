const scorePlayer = document.getElementById("playerscore")
const scoreComputer = document.getElementById("computerscore")
const rockBtn = document.getElementById('rockButton');
const paperBtn = document.getElementById('paperButton');
const scissorBtn = document.getElementById('scissorButton');
const matchResult = document.getElementById('matchResult');
const resultGame = document.getElementById('result')
const resetGameBtn = document.getElementById('resetGameBtn')

function getComputerChoice() {
    let j = 0;
    let choice;
    let odd = Math.floor(Math.random() * 100) + 1;
    if (odd >= 0 && odd <= 33) {
        choice = "ROCK";
    } else if (odd >= 34 && odd <= 67) {
        choice = "PAPER";
    } else choice = "SCISSOR";

    return choice;
}


function getPlayerMove() {
    return new Promise((resolve, reject) => {
        rockBtn.addEventListener("click", function () {
            resolve("ROCK");
        });
        paperBtn.addEventListener("click", function () {
            resolve("PAPER");
        });
        scissorBtn.addEventListener("click", function () {
            resolve("SCISSOR");
        });
    });
}




function checkResult(playerSelection, computSelection) {
    let gameResult;
    if (playerSelection === "ROCK" && computSelection === "SCISSOR") {
        gameResult = 1;


    } else if (playerSelection === "SCISSOR" && computSelection === "ROCK") {
        gameResult = 2;


    } else if (playerSelection === "PAPER" && computSelection === "ROCK") {
        gameResult = 1;


    } else if (playerSelection === "PAPER" && computSelection === "SCISSOR") {
        gameResult = 2;


    } else if (playerSelection === "SCISSOR" && computSelection === "PAPER") {
        gameResult = 1;


    } else if (playerSelection === "ROCK" && computSelection === "PAPER") {
        gameResult = 2;

    }
    else if (playerSelection === computSelection) {
        gameResult = 3;
    }
    console.log(gameResult);
    return gameResult;
}



async function game() {
    let i = 0;
    let w = 0;
    let l = 0;
    let d = 0;
    while (w < 5 && l < 5) {
        let playerMove = await getPlayerMove();
        console.log(playerMove);
        let computerMove = getComputerChoice();
        console.log(computerMove);
        let gameResult = checkResult(playerMove, computerMove);

        if (gameResult === 1) {
            w++
            i++
            scorePlayer.textContent = `${w}`;
            matchResult.textContent = `Good move! ${playerMove} beats ${computerMove}`;
        } else if (gameResult === 2) {
            l++
            i++
            scoreComputer.textContent = `${l}`;
            matchResult.textContent = `Unlucky move! ${computerMove} beats ${playerMove}`;
        } else if (gameResult === 3) matchResult.textContent = `It was a draw! ${computerMove} and ${playerMove}`;
    }
    if (w === 5) {
        resultGame.textContent = `Congratulations! You won the game!`;
        resetGameBtn.style.display = "block";
    } else if (l === 5) {
        resultGame.textContent = `Oops! You lost the game!`;
        resetGameBtn.style.display = "block";
    }
}

function resetGame(w, l) {
    w = 0;
    l = 0;
    resultGame.textContent = "";
    scoreComputer.textContent = `${l}`
    scorePlayer.textContent = `${w}`;
    matchResult.textContent = "";
    game();
}

resetGameBtn.addEventListener("click", function () {
    resetGameBtn.style.display = "none";
    resetGame();
});

game()