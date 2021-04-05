import React from 'react';
import Item from './GameItem';
import ConsultGamesRequest from '../../requests/ConsultGamesRequest';
import { ListGroup, CardDeck } from 'react-bootstrap';

export default function GamesList() {
    const request = new ConsultGamesRequest();
    const games = request.execute();

    const items = games.map(game => <Item key={game.id} game={game} />);

    return(
        <div>
            <CardDeck>
                {items}
            </CardDeck>
        </div>
    );
}