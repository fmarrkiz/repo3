"use strict";

//let ShowScoreInput = document.querySelectorAll(".ScoreInput");

let player1ScoreDisplay = document.querySelector("#player1Score");
let player2ScoreDisplay = document.querySelector("#player2Score");
let Player1button = document.querySelector("#player1Button");
let Player2Button = document.querySelector("#player2Button");
let resetButton = document.querySelector(".ResetButton");
let ScoringButtons = document.querySelectorAll(".ScoringButton");


let scorePlayer1 = 0;
let scorePlayer2 = 0;
let maxScore = 10;
let gameEnded = false;


document.addEventListener("DOMContentLoaded", function() {
    scorePlayer1 = 0;
    scorePlayer2 = 0;


Player1button.addEventListener("click", AddPointsPlayerOne);
Player2Button.addEventListener("click", AddPointsPlayerTwo);
resetButton.addEventListener("click", ResetGame);

});


function AddPointsPlayerOne(){
    if (!gameEnded) {
            scorePlayer1++;
            ShowScore();
            AndTheWinnerIs();
    }
}

function AddPointsPlayerTwo() {
    if (!gameEnded) {
        scorePlayer2++;
        ShowScore();
        AndTheWinnerIs();
    }
}

function ShowScore() {
    player1ScoreDisplay.innerText = scorePlayer1;
    player2ScoreDisplay.innerText = scorePlayer2;
}

function AndTheWinnerIs(){
    if (scorePlayer1 === maxScore) {
        gameEnded = true;
   let winner = document.createElement("div");
   winner.classList.add("winner");
   winner.textContent = "Player 1 wins!";  
   document.body.appendChild(winner); 
        HideButtons();
    
    }
    else if (scorePlayer2 === maxScore) {
        gameEnded = true;
        gameEnded = true;
   let winner = document.createElement("div");
   winner.classList.add("winner");
   winner.textContent = "Player 2 wins!";  
   document.body.appendChild(winner); 
        HideButtons();
        }

};


function HideButtons() {
    ScoringButtons.forEach(button => {
        button.style.display = "none";
    });
}

function ShowButtons() {
  ScoringButtons.forEach(button => {
    button.style.display = "block";
  });
}


function ResetGame(){
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    gameEnded = false;
    let winner = document.querySelector(".winner"); 
    if (winner) {
        winner.remove();
    }
    ShowScore();
    ShowButtons();

}
