/**
 * @file            Implements the logic for the 'Rock, Paper, Scissor, 
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
    Scissor: "scissor",
    Lizard: "lizard",
    Spock: "spock"
});
/* -------------------------------------------------------------------------- */
/**
 * @description An ENUM for keeping track of victories, losses & draws.
 */
const gameResult = Object.freeze({
    Lose: -1,
    Draw: 0,
    Win: 1
});
/* -------------------------------------------------------------------------- */
/**
 * @description Randomly generates an INTEGER that represents the computer's
 *              move according to the `moves` ENUM.
 * @returns     {number} An ENUM from `moves`
 */
function getComputerMove() {

    // STEP 1: Select the computer's `choice` div
    const computerMove = document.querySelector(`div[id="computer"] div[id="choice"]`);

    // STEP 2: Randomly select an integer
    let result = Math.floor(Math.random() * 5);

    // CASE 3A: Randomly selected ROCK
    if (result === 0) {
        computerMove.textContent = '✊';
        return moves.Rock;

    // CASE 3B: Randomly selcted PAPER
    } else if (result === 1) {
        computerMove.textContent = '🤚';
        return moves.Paper;

    // CASE 3C: Randomly selected SCISSOR
    } else if (result === 2) {
        computerMove.textContent = '✌️';
        return moves.Scissor;

    // CASE 3D: Randomly selected LIZARD
    } else if (result === 3) {
        computerMove.textContent = '🤏';
        return moves.Lizard;
    
    // CASE 3E: Randomly selected SPOCK
    } else {
        computerMove.textContent = '🖖';
        return moves.Spock;
    }
}
/* -------------------------------------------------------------------------- */
/**
 * @description Listens to the click input of a mouse & records the the button 
 *              that was pressed to the human's `score` div.
 * @param       {object} e An object reference to the `click` button
 * @return      {object} An enumeration from `moves`
 */
function getHumanMove(e) {

    // STEP 1: Select the human's `choice` div
    const humanMove = document.querySelector(`div[id="human"] div[id="choice"]`);

    // CASE 2A: Player clicked ROCK
    if (e.target.id === moves.Rock) {
        humanMove.textContent = '✊';
        return moves.Rock;

    // CASE 2B: Player clicked PAPER
    } else if (e.target.id === moves.Paper) {
        humanMove.textContent = '🤚';
        return moves.Paper;

    // CASE 2C: Player clicked scissor
    } else if (e.target.id === moves.Scissor) {
        humanMove.textContent = '✌️';
        return moves.Scissor;

    // CASE 2D: Player clicked LIZARD
    } else if (e.target.id === moves.Lizard) {
        humanMove.textContent = '🤏';
        return moves.Lizard;

    // CASE 2E: Player clicked SPOCK
    } else if (e.target.id === moves.Spock) {
        humanMove.textContent = '🖖';
        return moves.Spock;
    }
}
/* -------------------------------------------------------------------------- */
/**
 * @description Calculates & displays the outcome of the RPSLS round.
 * @param       {object} humanMove     
 * @param       {object} computerMove   
 * @returns     {number} An enumeration from `gameResult`
 */
function determineOutcome(humanMove, computerMove) {

    // CASE A: Player selcted ROCK
    if (humanMove === moves.Rock) {

        // CASE AI: Rock WINS against scissor & lizard
        if ((computerMove === moves.Scissor) || 
            (computerMove === moves.Lizard)) {
            return gameResult.Win;

        // CASE AII: Rock LOSES against paper & spock
        } else if ((computerMove == moves.Paper) || 
            (computerMove === moves.Spock)) {
            return gameResult.Lose;
        }
    // CASE B: Player selected PAPER
    } else if (humanMove === moves.Paper) {

        // CASE BI: Paper WINS against rock & spock
        if ((computerMove === moves.Rock) || 
            (computerMove === moves.Spock)) {
            return gameResult.Win;

        // CASE BII: Paper LOSES against scissor & lizard
        } else if ((computerMove === moves.Scissor) || 
            (computerMove === moves.Lizard)) {
            return gameResult.Lose;
        }
    // CASE C: PLayer selcted SCISSOR    
    } else if (humanMove === moves.Scissor) {

        // CASE CI: Scissor WINS against paper & lizard
        if ((computerMove === moves.Paper) || 
            (computerMove === moves.Lizard)) {
            return gameResult.Win;

        // CASE CII: Scissor LOSES against rock & spock
        } else if ((computerMove == moves.Rock) || 
            (computerMove === moves.Spock)) {
            return gameResult.Lose;
        }
    // CASE D: Player selected LIZARD
    } else if (humanMove === moves.Lizard) {

        // CASE DI: Lizard WINS against paper & spock
        if ((computerMove === moves.Paper) || 
            (computerMove === moves.Spock)) {
            return gameResult.Win;

        // CASE DII: Lizard LOSES against scissor & rock
        } else if ((computerMove === moves.Scissor) || 
            (computerMove === moves.Rock)) {
            return gameResult.Lose;
        }
    // CASE E: Player selected SPOCK
    } else {

        // CASE EI: Spock WINS against rock & scissor
        if ((computerMove == moves.Rock) || 
            (computerMove === moves.Scissor)) {
            return gameResult.Win;
        
        // CASE EII: Spock LOSES against paper & lizard
        } else if ((computerMove === moves.Paper) || 
            (computerMove === moves.Lizard)) {
            return gameResult.Lose;
        }
    }
    // CASE F: `humanMove` & `computerMove` resulted in a DRAW
    return gameResult.Draw;
}
/* -------------------------------------------------------------------------- */
