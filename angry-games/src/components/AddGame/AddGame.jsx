import { Form, Button } from 'react-bootstrap';
import './AddGame.css';

export default function AddGame(){
    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.File label="Select Image" />
                    <Form.Label>Title</Form.Label>
                    <Form.Control className="Input-txt" placeholder="Title" />
                    <Form.Label>Developer</Form.Label>
                    <Form.Control className="Input-txt" placeholder="Developer" />
                    <Form.Label>Description</Form.Label>
                    <Form.Control className="Input-txt" placeholder="Description" />
                </Form.Group>

                <Button className="ButtonAdd" type="submit">
                    Add Game
                </Button>
            </Form>
        </div>
    );
}