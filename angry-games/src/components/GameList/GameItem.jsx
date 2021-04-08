import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './GameList.css';

export default function GameItem(props){
    const game = props.game;

    return (
        <Col>
            <Card className="item">
                <Card.Body>
                    <div className= "alinea"><img className="gameImg" height="120 rem" width="160 rem"  src={game.image}/>
                    
                     </div>
                    <Card.Title>{game.title}</Card.Title>
                    <Card.Text>
                    {game.description}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </Col>
    );
}

