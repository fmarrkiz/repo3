"use strict";

//let ShowScoreInput = document.querySelectorAll(".ScoreInput");

let player1ScoreDisplay = document.querySelector("#player1Score");
let player2ScoreDisplay = document.querySelector("#player2Score");
let Player1button = document.querySelector("#player1Button");
let Player2Button = document.querySelector("#player2Button");
let resetButton = document.querySelector(".ResetButton");


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
    console.log("Player 1 button clicked!");
    if (!gameEnded) {
            scorePlayer1++;
            console.log("Player 1 score:", scorePlayer1);
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
    if (maxScore === scorePlayer1) {
        gameEnded = true;
        alert("Player 1 wins!");
        DisableButtons;
    }
    else if (maxScore === scorePlayer2) {
        gameEnded = true;
        alert("Player 2 wins!");
        DisableButtons;
        }

};


function DisableButtons() {
    Player1button.disabled = true;
    Player2Button.disabled = true;
}

function EnableButtons() {
    Player1button.disabled = false;
    Player2Button.disabled = false;
}


function ResetGame(){
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    gameEnded = false;
    ShowScore();
    EnableButtons();

}
