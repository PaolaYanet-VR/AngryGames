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
                            <div className="inline-svg"><img className="gameImage" src={gameImage}></img></div>
                            <br />
                            <Form.File   className="neon" label="Select Image" />
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