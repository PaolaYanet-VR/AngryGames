import { Form, Button, Row, Col } from 'react-bootstrap';
import './AddGame.css';

import gameImage from '../../img/img-games/default.png';

export default function AddGame(){
    return(
        <div>
            <Form>
                <Form.Group>
                    <br />
                    <Row>
                        <Col>
                            <img className="gameImage" src={gameImage}></img>
                            <Form.File label="Select Image" />
                            <Form.Label>Description</Form.Label>
                            <textarea
                                className="form-control"
                                rows="5"
                                placeholder="Description"
                            />
                        </Col>
                        <Col>
                            <Form.Label>Title</Form.Label>
                            <Form.Control className="Input-txt" placeholder="Title" />
                            <Form.Label>Developer</Form.Label>
                            <Form.Control className="Input-txt" placeholder="Developer" />
                            <br />
                            <Form.Control type="date" name='date_of_birth' />
                            <br />
                            <Form.Control as="select">
                                <option>Default select</option>
                            </Form.Control>
                            <br />
                            <Button className="ButtonAdd" type="submit">
                                Add Game
                            </Button>
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
        </div>
    );
}