import react from 'react';
import { ListGroup } from 'react-bootstrap';

function GameItem(props){
    const game = props.game;

    return (
        <ListGroup.Item>
            {game.title}
        </ListGroup.Item>
    );
}

export default GameItem;