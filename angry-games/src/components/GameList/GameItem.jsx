import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './GameList.css';

export default function GameItem(props){
    const game = props.game;
    
    const GameDetail = '../GameDetail/' + game.id;

    return (
        <Col>
            <Card className="item">
            <a className="item-a" href={ GameDetail } >
            <Card.Body>
                    
                    <div className= "alinea"><img className="gameImg" height="120 rem" width="160 rem"  src={game.image}/>
                    
                     </div><br />
                    <Card.Title>{game.title}</Card.Title>
                    <Card.Text>
                    Category: {game.category}<br />
                    {game.description} <br />
                    Developer: {game.developer}<br />
                    Release date: {game.releaseDate}
                    </Card.Text>
                    <Col>
                        <input type="image" src="../../img/delete.png" name="submit" width="100" height="48" alt="submit"/>
                    </Col>
                </Card.Body>       
            </a>
                
            </Card>
            <br />
        </Col>
    );
}

