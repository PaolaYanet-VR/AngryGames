import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import logo from '../../img/Logov2.png';
import { Link } from 'react-router-dom';

export default function NavGames() {
    return(
        <Navbar className="Nav">
            <Navbar.Brand className="Menu" as={Link} to="/home"><img className="logo" src={logo}></img>Angry Games</Navbar.Brand>
            <Nav.Link className="link" as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className="link" as={Link} to="/addGame">Add Game</Nav.Link>
        </Navbar>
    );
}