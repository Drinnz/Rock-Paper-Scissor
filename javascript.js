function getComputChoice() {
    let j = 0;
    let choice;
    let odd = Math.floor(Math.random() * 100) + 1;
    if (odd >= 0 && odd <= 33) {
        choice = "Rock";
    } else if (odd >= 34 && odd <= 67) {
        choice = "Paper";
    } else choice = "Scissors";

    return choice;
}

function gameRound() {
    playerSelection = prompt("What is your move?", "");
    computerSelection = getComputChoice();

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    let gameResult = "";
    console.log(computerSelection);
    if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        gameResult = 1;

    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        gameResult = 0;

    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        gameResult = 1;

    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        gameResult = 0;

    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        gameResult = 1;

    } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        gameResult = 0;
    }
    else if (playerSelection === computerSelection) {
        gameResult = 2;
    }
    return gameResult;
}


function game() {
    let l = 0;
    let w = 0;
    let d = 0;
    let i = 0;
    let gameResult = "";
    let result = "";
    while (i < 5) {
        result = gameRound();
        if (result === 1) {
            w++;
            i++;
        } else if (result === 0) {
            l++;
            i++;
        } else d++;
    }
    if (w > l) {
        gameResult = `Victories: ${w}, Draws ${d}, Loses: ${l}, You win!`;
    } else if (w < l) { gameResult = `Victories: ${w}, Draws ${d}, Loses: ${l}, You Lose!`; }
    else if (w === l) {
        gameResult = `Victories: ${w}, Draws ${d}, Loses: ${l}, Draw!`
    }
    return gameResult;
}



console.log(game());

