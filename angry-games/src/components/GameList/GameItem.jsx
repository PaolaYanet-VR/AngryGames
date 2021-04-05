import react from 'react';
import { ListGroup } from 'react-bootstrap';

export default function GameItem(props){
    const game = props.game;

    return (
        <ListGroup.Item>
           <label> {game.id} {game.title} </label>
        </ListGroup.Item>
    );
}

