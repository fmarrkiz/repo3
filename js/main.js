"use strict";

//let ShowScoreInput = document.querySelectorAll(".ScoreInput");

let player1ScoreDisplay = document.querySelector("#player1Score");
let player2ScoreDisplay = document.querySelector("#player2Score");
let Player1button = document.querySelector("#player1Button");
let Player2Button = document.querySelector("#player2Button");

let scorePlayer1 = 0;
let scorePlayer2 = 0;
let maxScore = 10;
let gameEnded = false;
let resetButton = document.querySelector("#resetButton");

Player1button.addEventListener("click", AddPointsPlayerOne);
Player2Button.addEventListener("click", AddPointsPlayerTwo);


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

function AndTheWinnerIs(){
    if (maxScore === scorePlayer1) {
        gameEnded = true;
        alert("Player 1 wins!");
    }
    else if (maxScore === scorePlayer2) {
        gameEnded = true;
        alert("Player 2 wins!");
    }

};


function ShowScore() {
    player1ScoreDisplay.textContent = scorePlayer1;
    player2ScoreDisplay.textContent = scorePlayer2;
}

resetButton.addEventListener("click", ResetGame);

function ResetGame(){
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    gameEnded = false;
    ShowScore();

}
