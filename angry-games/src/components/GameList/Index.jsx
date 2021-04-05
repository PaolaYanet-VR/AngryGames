import React from 'react';
import Item from './GameItem';
import List from './GamesList';
import ConsultGamesRequest from '../../requests/ConsultGamesRequest';
import { ListGroup } from 'react-bootstrap';

function GamesList() {
    const request = new ConsultGamesRequest();
    const games = request.execute();

    const items = games.map(game => <Item key={game.id} game={game} />);

    return(
        <div>
            <ListGroup>
                {items}
            </ListGroup>
        </div>
    );
}

export default GamesList();