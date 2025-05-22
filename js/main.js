"use strict";

let ShowScoreInput = document.querySelectorAll(".ScoreInput");
let ScoreDisplay = document.querySelectorAll(".ScoreDisplay");
let player1ScoreSpan = document.querySelector("#player1Score");
let player2ScoreSpan = document.querySelector("#player2Score");
let ScoringButtons = document.querySelectorAll(".ScoringButton");
let Player1button = document.querySelector("#player1Button");
let Player2Button = document.querySelector("#player2Button");

let scorePlayer1 = 0;
let scorePlayer2 = 0;
let maxScore = 10;
let gameEnded = false;

ScoringButtons.appendChild(ScoringPlayer1);
ScoringButtons.appendChild(ScoringPlayer2);





function AddPointsPlayerOne(){
    if (!gameEnded) {
        scorePlayer1++;
        ShowScore();
        AndTheWinnerIs();
    }
}

function ShowScore();

function AndTheWinnerIs();

function VictoryMessage(){
    if 
};

function ResetGame();
