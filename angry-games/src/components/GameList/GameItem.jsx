import React from 'react';
import { ListGroup, Card, ListGroupItem } from 'react-bootstrap';

export default function GameItem(props){
    const game = props.game;

    return (
        <ListGroup.Item>
            <Card>
                <Card.Img variant="top" height="100 rem" width="auto" src="https://i.stack.imgur.com/y9DpT.jpg"/>
                <Card.Body>
                    <Card.Title>{game.title}</Card.Title>
                    <Card.Text>
                    {game.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>Categoría: {game.category}</ListGroupItem>
                  <ListGroupItem>Desarrollador: {game.developer}</ListGroupItem>
                  <ListGroupItem>Fecha de lanzamiento: {game.releaseDate}</ListGroupItem>
                </ListGroup>
            </Card>
            <br />
        </ListGroup.Item>
    );
}

