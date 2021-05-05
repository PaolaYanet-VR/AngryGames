import React from 'react';
import './GameDetail.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import GetGameByIdRequest from '../../requests/GetGameByIdRequest';
import UpdateGameRequest from '../../requests/UpdateGameRequest';
import gameImage from '../../img/img-games/default.png';
import selectedGameAction from './actions/selectedGameAction';
import axios from 'axios';


/*export function returnId() {
    // obtener el id del game selected
    var URLactual = window.location.href;
    var Aid = URLactual.split("http://localhost:3000/gameDetail/");
    var id = Aid[1];

    return id;
}*/


export default function GameDetail(){
    const [titleText, setTitle] = React.useState('');
    const [developerText, setDeveloper] = React.useState('');
    const [imageText, setImage] = React.useState('');
    const [descriptionText, setDescription] = React.useState('');
    const [releaseDateText, setDate] = React.useState('');
    const [categoryText, setCategory] = React.useState('');

    const dispatch = useDispatch();

    // setters
    function handleTitleTextChange(event){
        setTitle(event.target.value);
    }

    function handleDeveloperTextChange(event){
        setDeveloper(event.target.value);
    }

    function handleReleaseDateTextChange(event){
        setDate(event.target.value);
    }

    function handleCategoryTextChange(event){
        setCategory(event.target.value);
    }

    function handleDescriptionTextChange(event){
        setDescription(event.target.value);
    }

    function handleImageTextChange(event){
        setImage(event.target.value);
        
    }

    /*function imageBase64(){
        const preview = document.getElementById('GAME_IMAGE');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            // convert image file to base64 string
            preview.src = reader.result;
            
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }*/

    // obtener el id del game selected
    var URLactual = window.location.href;
    var Aid = URLactual.split("http://localhost:3000/gameDetail/");
    var id = Aid[1];    

    // request get game
    /*async function loadGameById(value){
        //const result = new GetGameByIdRequest(value).send();
        //setGameSelected(result);
        //console.log(gameSelected);
    }*/

    function handleGameSelected(){
        const result = new GetGameByIdRequest(id).send();
        result.then(
            function(value) { 
                console.log(value); 
                const action = selectedGameAction(value.id, value.title, value.developer, value.image, value.description, value.releaseDate, value.category);
                dispatch(action);

                // setters
                setTitle(value.title);
                setDeveloper(value.developer);
                setImage(value.image);
                setDescription(value.description);
                setDate(value.releaseDate);
                setCategory(value.category);
            },
            function(error) { console.log(error); }
        );
    }

    // editar
    function handleFormSubmittion(){
        new UpdateGameRequest(id, titleText, developerText, imageText, descriptionText, releaseDateText, categoryText).send();
    }

    function handleImageUpload(){
        //axios.post('')
    }

    /*React.useEffect(() => {
        if (gameSelected === null) {
            loadGameById(id);
        }
    });*/

    return(
        <div onLoad={handleGameSelected}>
            <Form onSubmit={handleFormSubmittion}>
                <Form.Group>
                    <br />
                    <Row>
                        <Col>
                            <div className="inline-svg"><img id='GAME_IMAGE' className="gameImage" src={gameImage}></img></div>
                            <br />
                            <Form.Control className="Input-txt" placeholder="image URL" value={imageText} onChange={handleImageTextChange}/>
                            <br />
                            <Form.Label className="neon">Description</Form.Label>
                            <br />
                            <textarea 
                                onChange={handleDescriptionTextChange}
                                value={descriptionText}
                                className="form-control Input-txt"
                                rows="5"
                                placeholder="Description"
                            />
                        </Col>
                        <Col>
                            <Form.Label  className="neon">Title</Form.Label>
                            <br />
                            <Form.Control className="Input-txt" placeholder="Title" value={titleText} onChange={handleTitleTextChange}/>
                            <br />
                            <Form.Label  className="neon">Developer</Form.Label>
                            <br />
                            <Form.Control className="Input-txt" placeholder="Developer" value={developerText} onChange={handleDeveloperTextChange}/>
                            <br />
                            <Form.Label  className="neon">Relase Date</Form.Label>
                            <br />
                            <Form.Control className="Input-txt" type="date" name='date_of_birth' value={releaseDateText} onChange={handleReleaseDateTextChange}/>
                            <br />
                            <Form.Label  className="neon">Category</Form.Label>
                            <Form.Control className="Input-txt" as="select" value={categoryText} onChange={handleCategoryTextChange}>
                                <option>h</option>
                                <option>A</option>
                                <option>a</option>
                                <option>e</option>
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