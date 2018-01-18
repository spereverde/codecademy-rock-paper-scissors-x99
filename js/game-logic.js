// All code should be written in this file.

let playerOneMoveOneType, playerOneMoveOneValue,
    playerOneMoveTwoType, playerOneMoveTwoValue,
    playerOneMoveThreeType, playerOneMoveThreeValue,
    playerTwoMoveOneType, playerTwoMoveOneValue,
    playerTwoMoveTwoType, playerTwoMoveTwoValue,
    playerTwoMoveThreeType, playerTwoMoveThreeValue;


const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (isValidType(moveOneType) && isValidType(moveTwoType) && isValidType(moveThreeType)
        && (isValidValue(moveOneValue) && isValidValue(moveTwoValue) && isValidValue(moveThreeValue))
        && (moveOneValue + moveTwoValue + moveThreeValue == 99)
    ) {

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


};

const isValidType = moveType => {
    return moveType === 'rock' || moveType === 'paper' || moveType === 'scissors';
};

const isValidValue = moveValue => {
    return 1 <= moveValue <= 99;
};

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

const getRoundWinner = roundNumber => {

};

const getGameWinner = () => {

};