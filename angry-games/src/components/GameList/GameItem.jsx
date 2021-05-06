import React from 'react';
import { Card, Col, Nav } from 'react-bootstrap';
import './GameList.css';
import iconDelete from '../../img/delete.png';
import { Link } from 'react-router-dom';
import DeleteGameRequest from '../../requests/DeleteGameRequest';

export default function GameItem(props){
    const game = props.game;

    function DeleteGameAction(){
        const result = new DeleteGameRequest(game.id).send();
        window.location.reload();
    }

    return (
        <Col>
            <Card className="item">
                <Nav.Link className="link" as={Link} to={"/gameDetail/" + game.id} value={game.id}>
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
                    </Card.Body>
                </Nav.Link>    
                <button className="button-delete" onClick={DeleteGameAction}><img width="25px" src={iconDelete}/></button>
            </Card>
            <br />
        </Col>
    );
}

