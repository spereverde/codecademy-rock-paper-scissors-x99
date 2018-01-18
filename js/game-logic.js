// All code should be written in this file.

let playerOneMoveOneType = undefined;
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeType = undefined;
let playerOneMoveThreeValue = undefined;

let playerTwoMoveOneType = undefined;
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeType = undefined;
let playerTwoMoveThreeValue = undefined;


const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (
        (moveOneType === 'rock' || moveOneType === 'paper' || moveOneType === 'scissors') &&
        (moveTwoType === 'rock' || moveTwoType === 'paper' || moveTwoType === 'scissors') &&
        (moveThreeType === 'rock' || moveThreeType === 'paper' || moveThreeType === 'scissors') ) {

        if (player === "Player One") {
            playerOneMoveOneType = moveOneType;
            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeType = moveThreeType;
            playerOneMoveThreeValue = moveThreeValue;
        } else if (player === 'Player Two') {
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeType = moveThreeType;
            playerTwoMoveThreeValue = moveThreeValue;
        }

    };


}

const setComputerMoves = () => {
    randomType = Math.floor(Math.random() * 3);
    console.log(randomType);
    const moves = ['rock', 'paper', 'scissors']
    playerTwoMoveOneType = moves[Math.floor(Math.random() * 3)];
    playerTwoMoveTwoType = moves[Math.floor(Math.random() * 3)];
    playerTwoMoveThreeType = moves[Math.floor(Math.random() * 3)];
    console.log('move types: ' + playerTwoMoveOneType + ', ' + playerTwoMoveTwoType + ', ' + playerTwoMoveThreeType);

    playerTwoMoveOneValue = Math.floor(Math.random() * (97));
    playerTwoMoveTwoValue = Math.floor(Math.random() * (96 - playerTwoMoveOneValue));
    playerTwoMoveThreeValue = 99 - playerTwoMoveTwoValue - playerTwoMoveOneValue;
    console.log('move values: ' + playerTwoMoveOneValue + ', ' + playerTwoMoveTwoValue + ', ' + playerTwoMoveThreeValue);

};

const getRoundWinner = () => {

};

const getGameWinner = () => {

};