import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectSquare } from './features/game/tictactoeSlice';
const Square = ({value, selectSquare}) => (
            <button className="square" onClick={() => selectSquare()}>
                {value}
            </button>
        );

function Board() {
    const tttBoard = useSelector((state) => state.game.board)
    const tttSeries = useSelector((state) => state.game.series)
    const tttStatus = 'status ';
    const playerTurn = useSelector((state) => state.game.nextPlayer);
    const dispatch = useDispatch();

    function renderSquare(i) {
        return (
            <Square value={tttBoard[i]}
                    selectSquare={() => dispatch(selectSquare({id: i}))}
            />);
    }

    return (
        <div>
            <div className="history">Score: X - {tttSeries["xWins"]}, O - {tttSeries["oWins"]}</div>
            <div className="status">{tttStatus + playerTurn}</div>
            <div className="boardRow">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="boardRow">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="boardRow">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;