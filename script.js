/**
 * @file        script.js
 * @description Implements the logic for the 'Rock, Paper, Scissor, 
 *              Lizard, Spock' game.
 * @author      Jude Thaddeau Data
 * @link        GitHub: https://github.com/jtd-117
* --------------------------------------------------------------------------- */
/**
 * @description An ENUM for the moves the human & computer can play.
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
    const computerMove = document.querySelector(`div[id="computer"] div[class="choice"]`);

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
    const humanMove = document.querySelector(`div[id="human"] div[class="choice"]`);

    // CASE 2A: Human clicked ROCK
    if (e.target.id === moves.Rock) {
        humanMove.textContent = '✊';
        return moves.Rock;

    // CASE 2B: Human clicked PAPER
    } else if (e.target.id === moves.Paper) {
        humanMove.textContent = '🤚';
        return moves.Paper;

    // CASE 2C: Human clicked scissor
    } else if (e.target.id === moves.Scissor) {
        humanMove.textContent = '✌️';
        return moves.Scissor;

    // CASE 2D: Human clicked LIZARD
    } else if (e.target.id === moves.Lizard) {
        humanMove.textContent = '🤏';
        return moves.Lizard;

    // CASE 2E: Human clicked SPOCK
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

    // STEP 1: Get the `reason div`
    const reasonDiv = document.getElementById('reason');

    // CASE A: Human selcted ROCK
    if (humanMove === moves.Rock) {

        // CASE AI: Rock WINS against scissor & lizard
        if ((computerMove === moves.Scissor) || 
            (computerMove === moves.Lizard)) {
            reasonDiv.textContent = 
                `${humanMove} crushes ${computerMove}`;
            return gameResult.Win;

        // CASE AII: Rock LOSES against paper & spock
        } else if ((computerMove == moves.Paper) || 
            (computerMove === moves.Spock)) {
            if (computerMove === moves.Paper) {
                reasonDiv.textContent = 
                    `${computerMove} covers ${humanMove}`;
            } else {
                reasonDiv.textContent = 
                    `${computerMove} vaporises ${humanMove}`;
            }
            return gameResult.Lose;
        }
    // CASE B: Human selected PAPER
    } else if (humanMove === moves.Paper) {

        // CASE BI: Paper WINS against rock & spock
        if ((computerMove === moves.Rock) || 
            (computerMove === moves.Spock)) {
            if (computerMove === moves.Rock) {
                reasonDiv.textContent = 
                    `${humanMove} covers ${computerMove}`;
            } else {
                reasonDiv.textContent = 
                    `${humanMove} disproves ${computerMove}`;
            }
            return gameResult.Win;

        // CASE BII: Paper LOSES against scissor & lizard
        } else if ((computerMove === moves.Scissor) || 
            (computerMove === moves.Lizard)) {
            if (computerMove === moves.Scissor) {
                reasonDiv.textContent = 
                    `${computerMove} cuts ${humanMove}`;
            } else {
                reasonDiv.textContent = 
                    `${computerMove} eats ${humanMove}`;
            }
            return gameResult.Lose;
        }
    // CASE C: Human selcted SCISSOR    
    } else if (humanMove === moves.Scissor) {

        // CASE CI: Scissor WINS against paper & lizard
        if ((computerMove === moves.Paper) || 
            (computerMove === moves.Lizard)) {
            if (computerMove === moves.Paper) {
                reasonDiv.textContent = 
                    `${humanMove} cuts ${computerMove}`;
            } else {
                reasonDiv.textContent = 
                    `${humanMove} decapitates ${computerMove}`;
            }
            return gameResult.Win;

        // CASE CII: Scissor LOSES against rock & spock
        } else if ((computerMove == moves.Rock) || 
            (computerMove === moves.Spock)) {
            if (computerMove === moves.Rock) {
                reasonDiv.textContent = 
                    `${computerMove} crushes ${humanMove}`;
            } else {
                reasonDiv.textContent = 
                    `${computerMove} smashes ${humanMove}`;
            }
            return gameResult.Lose;
        }
    // CASE D: Human selected LIZARD
    } else if (humanMove === moves.Lizard) {

        // CASE DI: Lizard WINS against paper & spock
        if ((computerMove === moves.Paper) || 
            (computerMove === moves.Spock)) {
            if (computerMove === moves.Paper) {
                reasonDiv.textContent = 
                    `${humanMove} eats ${computerMove}`;
            } else {
                reasonDiv.textContent = 
                    `${humanMove} poisons ${computerMove}`;
            }
            return gameResult.Win;

        // CASE DII: Lizard LOSES against scissor & rock
        } else if ((computerMove === moves.Scissor) || 
            (computerMove === moves.Rock)) {
            if (computerMove === moves.Scissor) {
                reasonDiv.textContent = 
                    `${computerMove} decapitates ${humanMove}`;
            } else {
                reasonDiv.textContent = 
                    `${computerMove} crushes ${humanMove}`;
            }
            return gameResult.Lose;
        }
    // CASE E: Human selected SPOCK
    } else {

        // CASE EI: Spock WINS against rock & scissor
        if ((computerMove == moves.Rock) || 
            (computerMove === moves.Scissor)) {
            if (computerMove === moves.Rock) {
                reasonDiv.textContent = 
                    `${humanMove} vaporises ${computerMove}`;
            } else {
                reasonDiv.textContent = 
                    `${humanMove} smashes ${computerMove}`;
            }
            return gameResult.Win;
        
        // CASE EII: Spock LOSES against paper & lizard
        } else if ((computerMove === moves.Paper) || 
            (computerMove === moves.Lizard)) {
            if (computerMove === moves.Paper) {
                reasonDiv.textContent = 
                    `${computerMove} disproves ${humanMove}`;
            } else {
                reasonDiv.textContent = 
                `${computerMove} poisons ${humanMove}`;
            }
            return gameResult.Lose;
        }
    }
    // CASE F: `humanMove` & `computerMove` resulted in a DRAW
    reasonDiv.textContent = `${humanMove} ties with ${computerMove}`;
    return gameResult.Draw;
}
/* -------------------------------------------------------------------------- */
/**
 * @description Disables all HTML buttons.
 * @link        https://github.com/benfowler04/rock-paper-scissors/blob/master/rps.js
 */
function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true
    });
}
/* -------------------------------------------------------------------------- */
/**
 * @description Refreshes the website.
 * @link        https://www.freecodecamp.org/news/javascript-refresh-page-how-to-reload-a-page-in-js/#:~:text=The%20simplest%20way%20to%20refresh,and%20loading%20the%20latest%20content.
 */
function refreshPage() {
    location.reload();
}
/* -------------------------------------------------------------------------- */
/**
 * @description Plays the audio stored in the HTML tag with `id`.
 * @param       {string} id The HTML tag that contains the audio
 */
function playAudio(id) {

    // STEP 1: Locate the audio in the DOM
    const audio = document.getElementById(id);

    // STEP 2: Execute the media if it exists
    if (!audio) return;
    audio.play();
}
/* -------------------------------------------------------------------------- */
/**
 * @description Adds HTML tags to allow players to replay the game.
 */
function playAgainPrompt() {

    // STEP 1: Create 'aside' container with `h1` & `button` elements
    const replay = document.createElement('aside');
    replay.setAttribute('id', 'replay');
    const replayPrompt = document.createElement('h1');
    replayPrompt.setAttribute('id', 'replayPrompt');
    const replayButton = document.createElement('button');
    replayButton.setAttribute('id', 'replayButton');

    // STEP 3: Style `h1` container & play victory/loss music sting
    if (humanScore === bestTo) {
        playAudio('win-mp3');
        replayPrompt.textContent = "YOU WIN!";
    } else {
        playAudio('lose-mp3');
        replayPrompt.textContent = "YOU LOSE!";
    }
    // STEP 4: Style the `button` container
    replayButton.textContent = "Play Again";
    replay.addEventListener('click', refreshPage);

    // STEP 5: Add `h1` & `button` to `replay`
    replay.appendChild(replayPrompt);
    replay.appendChild(replayButton);

    // STEP 6: Add `replay` to the end of `body`
    const body = document.querySelector('body');
    body.appendChild(replay)
}

/* -------------------------------------------------------------------------- */
/**
 * @description Plays a single round of RPSLS.
 * @param       {object} e An object reference to the `click` button
 */
function playRPSLS(e) {

    // STEP 1: Play the button click sound
    playAudio("click-mp3");

    // STEP 2: Adjust the `outcome` container
    if ((humanScore === 0) && (computerScore === 0)) {
        const resultDiv = document.getElementById('result');
        resultDiv.textContent = 'Outcome:';
    }
    // STEP 3: Human rounds & keep track of the score
    if ((humanScore < bestTo) && (computerScore < bestTo)) {

        // STEP 4: Extract `humanMove` & `computerMove`
        humanMove = getHumanMove(e);
        computerMove = getComputerMove();

        // STEP 5: Determine the outcome
        result = determineOutcome(humanMove, computerMove);

        // CASE 6A: The human LOST
        if (result === gameResult.Lose) {
            computerScore++;
            computerScoreDiv.textContent = `Computer: ${computerScore}`;

        // CASE 6B: The human WON
        } else if (result === gameResult.Win) {
            humanScore++;
            humanScoreDiv.textContent = `Human: ${humanScore}`;
        }
        // STEP 7: Conclude game when max score has been reached
        if ((humanScore === bestTo) || (computerScore === bestTo)) {

            // STEP 8: Disable buttons
            disableButtons();

            // STEP 9: Provide a mechanism to replay the game
            playAgainPrompt();
        }
    }
}
/* -------------------------------------------------------------------------- */

// STEP 1: Define variables
let humanMove = null;
const humanScoreDiv = document.querySelector(`div[id="human"] div[class="score"]`);
let computerMove = null;
const computerScoreDiv = document.querySelector(`div[id="computer"] div[class="score"]`);
let result = NaN;
let bestTo = 5;

// STEP 2: Get all buttons
const buttons = Array.from(document.querySelectorAll('button'));

// STEP 3: Add an event listener to each button & play the game
let humanScore = 0;
let computerScore = 0;
buttons.forEach(button => button.addEventListener('click', playRPSLS));