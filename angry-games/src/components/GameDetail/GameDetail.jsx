import React from 'react';
import './GameDetail.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
//import {useDispatch, useSelector} from 'react-redux';
import ConsultGamesRequest from '../../requests/ConsultGamesRequest';
import gameImage from '../../img/img-games/default.png';

export default function GameDetail(){
    var URLactual = window.location.href;

    var id = URLactual.split("http://localhost:3000/GameDetail/");
    const request = new ConsultGamesRequest();
    const games = request.execute();
    //const games = useSelector(state => state.game);

    var gameSelected;

    games.forEach(element => {
        if(element.id == id){
            gameSelected = element;
        }
    });

    return(
        <div>
            <Form>
                <Form.Group>
                    <br />
                    <Row>
                        <Col>
                            <div className="inline-svg"><img className="gameImage" src={gameImage}></img></div>
                            <br />
                            <Form.File   className="neon" label=" " />
                            <br />
                            <Form.Label className="neon">Description</Form.Label>
                            <br />
                            <textarea 
                                className="form-control Input-txt"
                                rows="5"
                                placeholder="Description"
                            />
                        </Col>
                        <Col>
                            <Form.Label  className="neon">Title</Form.Label>
                            <br />
                            <Form.Control className="Input-txt" placeholder="Title" />
                            <br />
                            <Form.Label  className="neon">Developer</Form.Label>
                            <br />
                            <Form.Control className="Input-txt" placeholder="Developer" />
                            <br />
                            <Form.Label  className="neon">Relase Date</Form.Label>
                            <br />
                            <Form.Control className="Input-txt" type="date" name='date_of_birth' />
                            <br />
                            <Form.Label  className="neon">Category</Form.Label>
                            <Form.Control className="Input-txt" as="select">
                                <option>Default select</option>
                            </Form.Control>
                            <br />
                            <Button className="ButtonEdit" type="submit">
                                Edit Game
                            </Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </div>
    );
}