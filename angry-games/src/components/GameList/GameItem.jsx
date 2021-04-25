import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './GameList.css';
import iconDelete from '../../img/delete.png';

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
                        <button className="button-delete"><img width="25px" src={iconDelete}/></button>
                    </Col>
                </Card.Body>
            </a>
                
            </Card>
            <br />
        </Col>
    );
}

