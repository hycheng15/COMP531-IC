import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { requestPlayers } from './features/game/tictactoeSlice';
import React from "react";

function Players() {
    const players = useSelector(state => state.game.players);
    const dispatch = useDispatch();

    useEffect(() => {
        // const users = ['John'];
        // TODO: Fetch array of users on the dummy server.
        const fetchUser = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const jsonData = await response.json();
            const users = jsonData.map(user => user.name);
            dispatch(requestPlayers({users}));
        }
        fetchUser();
    },[dispatch]);

    return (
        <div>
            <h2>Players</h2>
            <ol>
                {/* TODO: create an ordered list of players */}
                {players.map((user, index) => (
                    <li key={index}>{user}</li>
                ))}
            </ol>
            <Link to={"/"}>Home</Link>
        </div>
    );
}


export default Players;
