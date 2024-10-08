import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Board from './Board';
import Players from './Players';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import tictactoeReducer from "./features/game/tictactoeSlice";
import reportWebVitals from './reportWebVitals';

const store = configureStore({reducer: {game: tictactoeReducer }})

function Game() {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* players */}</ol>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Game />} />
                    /* TODO: create a route for the '/players' endpoint */
                    <Route exact path="/players" element={<Players />} />
                </Routes>
            </Router>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();