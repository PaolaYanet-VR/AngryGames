import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import logo from '../../img/LogoPre.png';

export default function NavGames() {
    return(
        <Navbar className="Nav">
            <Navbar.Brand className="Menu" href="#home"><img className="logo" src={logo}></img>Angry Games</Navbar.Brand>
            <Nav.Link className="link" href="#home">Home</Nav.Link>
            <Nav.Link className="link" href="#link">Add Game</Nav.Link>
        </Navbar>
    );
}