/**
 * @file            Implements the logic for the 'Rock, Paper, Scizzor, 
 *                  Lizard, Spock' game.
 * @author          Jude Thaddeau Data
 * @link            https://github.com/jtd-117
 */
/* -------------------------------------------------------------------------- */
/**
 * @description An ENUM for the moves the player & computer can play.
 */

const moves = Object.freeze({
    Rock: "rock",
    Paper: "paper",
    Scizzor: "scizzor",
    Lizard: "lizard",
    Spock: "spock"
})
/* -------------------------------------------------------------------------- */
/**
 * @description An ENUM for keeping track of victories, losses & draws.
 */
const gameResult = Object.freeze({
    Lose: -1,
    Draw: 0,
    Win: 1
})
/* -------------------------------------------------------------------------- */
/**
 * @description Randomly generates an INTEGER that represents the computer's
 *              move according to the `moves` ENUM.
 * @returns     {number} An ENUM from `moves`
 */
function getComputerMove() {

    // STEP 1: Select the `computer-move` div
    const computerMove = document.querySelector(`div[id="computer"] div[id="choice"]`);
    computerMove.textContent = "Computer: ";

    // STEP 2: Randomly select an integer
    let result = Math.floor(Math.random() * 5);

    // CASE 3A: Randomly selected ROCK
    if (result === 0) {
        computerMove.textContent += '✊';
        return moveNames.Rock;

    // CASE 3B: Randomly selcted PAPER
    } else if (result === 1) {
        computerMove.textContent += '🤚';
        return moveNames.Paper;

    // CASE 3C: Randomly selected SCIZZOR
    } else if (result === 2) {
        computerMove.textContent += '✌️';
        return moveNames.Scizzor;

    // CASE 3D: Randomly selected LIZARD
    } else if (result === 3) {
        computerMove.textContent += '🤏';
        return moveNames.Lizard;
    
    // CASE 3E: Randomly selected SPOCK
    } else {
        computerMove.textContent += '🖖';
        return moveNames.Spock;
    }
}
/* -------------------------------------------------------------------------- */