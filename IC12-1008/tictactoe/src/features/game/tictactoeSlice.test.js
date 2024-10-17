import tictactoeReducer, { selectSquare } from "./tictactoeSlice";

test('test player winning game', () => {

    let currState = tictactoeReducer(undefined, selectSquare({ id: 0 }));
    currState = tictactoeReducer(currState, selectSquare({ id: 3 }));
    currState = tictactoeReducer(currState, selectSquare({ id: 1 }));
    currState = tictactoeReducer(currState, selectSquare({ id: 4 }));
    currState = tictactoeReducer(currState, selectSquare({ id: 2 }));

    expect(currState.board).toEqual(['X', 'X', 'X', 'O', 'O', '', '', '', '']);
});