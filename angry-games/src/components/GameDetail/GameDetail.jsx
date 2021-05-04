import React from 'react';
import './GameDetail.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import GetGameByIdRequest from '../../requests/GetGameByIdRequest';
import gameImage from '../../img/img-games/default.png';
import selectedGameAction from './actions/selectedGameAction';


/*export function returnId() {
    // obtener el id del game selected
    var URLactual = window.location.href;
    var Aid = URLactual.split("http://localhost:3000/gameDetail/");
    var id = Aid[1];

    return id;
}*/


export default function GameDetail(){
    const [gameSelected, setGameSelected] = React.useState('');
    const dispatch = useDispatch();

    // obtener el id del game selected
    var URLactual = window.location.href;
    var Aid = URLactual.split("http://localhost:3000/gameDetail/");
    var id = Aid[1];    

    // request get game
    async function loadGameById(){
        const result = new GetGameByIdRequest().execute();
        setGameSelected(result);
        console.log(result);
    }

    function handleGameSelected(){
        const action = selectedGameAction(id);
        dispatch(action);
        
    }

    React.useEffect(() => {
        if (gameSelected === null) {
            loadGameById();
        }
    });

    return(
        <div onLoad={handleGameSelected}>
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