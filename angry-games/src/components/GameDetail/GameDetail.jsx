import React from 'react';
import './GameDetail.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import GetGameByIdRequest from '../../requests/GetGameByIdRequest';
import UpdateGameRequest from '../../requests/UpdateGameRequest';
import DeleteGameRequest from '../../requests/DeleteGameRequest';
import iconDelete from '../../img/delete.png';
import selectedGameAction from './actions/selectedGameAction';
import '../GameList/GameList.css';
import Swal from 'sweetalert2';


export default function GameDetail(){
    const [titleText, setTitle] = React.useState('');
    const [developerText, setDeveloper] = React.useState('');
    const [imageText, setImage] = React.useState('');
    const [descriptionText, setDescription] = React.useState('');
    const [releaseDateText, setDate] = React.useState('');
    const [categoryText, setCategory] = React.useState('');

    var flag = false;

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


    // obtener el id del game selected
    var URLactual = window.location.href;
    var Aid = URLactual.split("http://localhost:3000/gameDetail/");
    var id = Aid[1];    


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
                flag = true;
            },
            function(error) { console.log(error); }
        );
        
        
    }

    // editar
    function handleFormSubmittion(){
        new UpdateGameRequest(id, titleText, developerText, imageText, descriptionText, releaseDateText, categoryText).send();
        if(flag){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                showConfirmButton: false,
                timer: 3000
              })
        }
          //window.location.href = "http://localhost:3000/home";   
    }

    


    function definirUrl(value){
        var url="";
        if(value == null || value==""){
            url = "https://tse3.mm.bing.net/th?id=OIP.Bxx34opF6SddzxTBpMh2tgHaDF&pid=Api";
        }else{
            url = value;
        }

        return url;
    }

    function DeleteGameAction(){
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })

          swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your game has been deleted.',
                    'success'
                )
                const result = new DeleteGameRequest(id).send();
                setTimeout(Home, 2000)
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
    }

    function Home(){
        window.location.replace("http://localhost:3000/home");
    }

    function changePage(){
        window.location.href = "http://localhost:3000/home";
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
                            <div className="inline-svg"><img id='GAME_IMAGE' className="gameImage" src={definirUrl(imageText)}></img></div>
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
                            <Form.Control className="Input-txt" type="date" value={releaseDateText} onChange={handleReleaseDateTextChange}/>
                            <br />
                            <Form.Label  className="neon">Category</Form.Label>
                            <Form.Control className="Input-txt" as="select" value={categoryText} onChange={handleCategoryTextChange}>
                                <option>Action</option>
                                <option>Adventure</option>
                                <option>Casual</option>
                                <option>Racing</option>
                                <option>RPG</option>
                                <option>Simulation</option>
                                <option>Sports</option>
                                <option>Strategy</option>
                            </Form.Control>
                            <br />
                            <Row>
                                <Col>
                                    <Button className="ButtonEdit" type="submit">Edit Game</Button>
                                </Col>
                            </Row>
                            
                        </Col>
                    </Row>
                </Form.Group>
            </Form>
            <Button className="ButtonDelete" onClick={DeleteGameAction}><img width="25px" src={iconDelete}/>Delete Game</Button>
        </div>
    );
}