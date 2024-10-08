import { createSlice } from '@reduxjs/toolkit';

export const tictactoeSlice = createSlice({
    name: 'game',
    initialState: {
        players: ['Joseph', 'Mary'],
        playerTurn: 'X',
        series: {xWins: 0, oWins: 0},
        status: 'Player turn: ',
        board: Array(9).fill("")
    },
    reducers: {
        // select a square on the tic-tac-toe board
        /**
         * Handles the user selecting a square to place an X or O.
         * Updates the `board` state by adding the player's mark to the selected square.
         * Checks for a winner by looping through all the winning combinations and if a winner is found,
         * updates the `series` state by incrementing the winner's score and resets the board.
         * Finally, changes the `nextPlayer` state to the other player.
         * @param {object} action - an object with a single property, `id`, which is the id of the square selected by the user.
         */
        selectSquare: (state, action) => {
            const id = action.payload.id;

            if (!state.board[id]) {
                state.board[id] = state.playerTurn;

                // check if a player won the game
                if (wonGame(state.board, state.playerTurn)) {
                    (state.playerTurn === 'X') ? state.series.xWins++ : state.series.oWins++;
                    state.board = Array(9).fill("");
                }

                //check if the game is a draw
              else if (gameDraw(state.board))
                  state.board = Array(9).fill("");

              state.playerTurn = (state.playerTurn === "X") ? "O" : "X";
            }
        },

        // get player user names
        requestPlayers: (state, action) => {
            // TODO: Map state players to an array of the dummy server usernames
            state.players = action.payload.users;
        }

    }
})

/**
 * Check to see if current player won the game.
 * @param board  The tic-tac-toe board
 * @param player  The player that just made a move
 * @returns True if the player won the game, false otherwise
 */
function wonGame(board: string[], player): boolean {
    let winnerFound = false;
    const winCombos = [ [0, 1, 2], [0, 3, 6], [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8], [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]];

    // loop through all the winning combinations
    winCombos.forEach(combo => {
        let win = true;
        // check if player made a move in each board location of the winning combination
        combo.forEach(pos =>  win = win && (board[pos] === player));
        if (win) {
            winnerFound = true;
        }
    });

    return winnerFound;
}

/**
 * Check to see if the game ended in a draw
 * @param board  The tic-tac-toe board
 * @returns True if the game is a draw, false otherwise
 */
function gameDraw(board: string[]) {
    let draw = true;

    // check if player made a move in each board location of the winning combination
    board.forEach(pos =>  draw = draw && (pos !== ""));
    return draw;

}


// Generate action creators
export const { selectSquare, requestPlayers } = tictactoeSlice.actions

export default tictactoeSlice.reducer