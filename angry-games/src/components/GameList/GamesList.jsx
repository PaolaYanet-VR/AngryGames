import React from 'react';
import Item from './GameItem';
import ConsultGamesRequest from '../../requests/GetGamesRequest';
import { Row } from 'react-bootstrap';
import Carousel from './CarouselHome';

export default function GamesList() {
    //const request = new ConsultGamesRequest();
    //const gamess = request.execute();
    const [games, setGames] =  React.useState(null);

    async function loadGames() {
        const result = await new ConsultGamesRequest().execute();
        setGames(result);
    }

    React.useEffect(() => {
        if (games === null) {
            loadGames();
        }
    });

    const items = (games === null ? [] : games).map(game => (
        <Item key={game.id} game={game} />
    ));
    
    return(
        <div>
        <Carousel />
        <Row>
            {items}
        </Row>
        </div>
        
    );
}