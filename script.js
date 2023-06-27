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
