import { createSlice } from '@reduxjs/toolkit';

export const tictactoeSlice = createSlice({
    name: 'game',
    initialState: {
        players:[],
        nextPlayer: 'X',
        series: {xWins: 0, oWins: 0},
        status: 'Player turn: ',
        board: Array(9).fill("")
    },
    reducers: {
        selectSquare: (state, action) => {
            const id = action.payload.id; //TODO fill in
            const winCombos = [ [0, 1, 2], [0, 3, 6], [0, 4, 8],
                                [1, 4, 7],
                                [2, 5, 8], [2, 4, 6],
                                [3, 4, 5],
                                [6, 7, 8]];
            
            if (!state.board[id]) {
                state.board[id] = state.nextPlayer;
                // loop through all the winning combinations
                winCombos.forEach(combo => {
                    let win = true;
                    // check if player made a move in each board location of the winning combination
                    combo.forEach(pos =>  win = win && (state.board[pos] === state.nextPlayer));
                    if (win) {
                        const key = state.nextPlayer.toLowerCase() + "Wins";
                        state.series[key] += 1;
                        state.board = Array(9).fill("")
                    }
                });
                state.nextPlayer = state.nextPlayer === 'X' ? 'O' : 'X';
            }
        }
    }
})

// Generate action creators
export const { selectSquare } = tictactoeSlice.actions

export default tictactoeSlice.reducer