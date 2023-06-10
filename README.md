# Rock-Paper-Scissor

This is project proposed by The Odin Project.

const scorePlayer = document.getElementById("playerscore")
const scoreComputer = document.getElementById("computerscore")
const rockBtn = document.getElementById('rockButton');
const paperBtn = document.getElementById('paperButton');
const scissorBtn = document.getElementById('scissorButton');


function getComputerChoice() {
    let j = 0;
    let choice;
    let odd = Math.floor(Math.random() * 100) + 1;
    if (odd >= 0 && odd <= 33) {
        choice = "ROCK";
    } else if (odd >= 34 && odd <= 67) {
        choice = "PAPER";
    } else choice = "SCISSORS";

    return choice;
}


function gameRound() {

    let playerSelection;
    
    let computSelection = getComputerChoice();

    rockBtn.addEventListener("click", function() {
        playerSelection = "ROCK";
        handleSelection();
    });
    paperBtn.addEventListener("click", function() {
        playerSelection = "PAPER";
        handleSelection();
    });
    scissorBtn.addEventListener("click", function() {
        playerSelection = "SCISSOR";
        handleSelection();
    });

    function handleSelection() {
        // Lógica que depende de playerSelection
        console.log(playerSelection);
        console.log(computSelection);
        checkResult();
    }
    function checkResult(){ 
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
game();

function game() {
    let l = 0;
    let w = 0;
    let d = 0;
    let i = 0;
    
      while(i<5){ 
        if (gameResult === 1) {
            w++;
            i++;
            scorePlayer.textContent=`${w}`;
            
        } else if (gameResult === 2) {
            l++;
            i++;
            scoreComputer.textContent=`${l}`;
        } else d++;
     }

   return i;


    }
}
}
gameRound();
