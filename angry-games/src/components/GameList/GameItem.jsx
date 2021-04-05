import React from 'react';
import { Card, Col } from 'react-bootstrap';
import '../GameList.css';

export default function GameItem(props){
    const game = props.game;

    return (
        <Col>
            <Card className="item">
                <Card.Body>
                    <img className="gameImg" height="100 rem" width="auto" src="https://i.stack.imgur.com/y9DpT.jpg"/>
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

