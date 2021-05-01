import React from 'react';
import { Card, Col, Nav } from 'react-bootstrap';
import './GameList.css';
import iconDelete from '../../img/delete.png';

export default function GameItem(props){
    const game = props.game;
    
    const [selectedGame, setSelectedGame] = React.useState('');

    function handleSelectedGameChange(event){
        const value = event.target.value;
        setSelectedGame(value);
        console.log(selectedGame);
    }

    return (
        <Col>
            <Card className="item">
            
            <Nav.Link className="link"  href="gameDetail" value={game.id} onClick={handleSelectedGameChange}>    
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
                </Nav.Link>       
            
                
            </Card>
            <br />
        </Col>
    );
}

