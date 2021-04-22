import React from 'react';
import { Button } from 'react-bootstrap';

export default function GameDetail(props){
    const game = props.game;
    return(
        <div>
            <Button>Go back</Button>
            <h1>{game.title}</h1>
            <br/>
            <img height="120 rem" width="160 rem"  src={game.image}/>
            <label>{game.category}</label>
            <label>{game.description}</label>
            <label>{game.developer}</label>
            <label>{game.releaseDate}</label>
        </div>
    );
}