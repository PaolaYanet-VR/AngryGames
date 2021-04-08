import React from 'react';
import Item from './GameItem';
import ConsultGamesRequest from '../../requests/ConsultGamesRequest';
import { Row } from 'react-bootstrap';
import Carousel from './CarouselHome';

export default function GamesList() {
    const request = new ConsultGamesRequest();
    const games = request.execute();

    const items = games.map(game => <Item key={game.id} game={game} />);

    return(
        <div>
        <Carousel />
        <Row>
            {items}
        </Row>
        </div>
        
    );
}