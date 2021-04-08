import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

export default function NavGames() {
    return(
        <Navbar className="Nav">
            <Navbar.Brand className="Menu" href="#home">Angry Games</Navbar.Brand>
            <Nav.Link className="link" href="#home">Home</Nav.Link>
            <Nav.Link className="link" href="#link">Add Game</Nav.Link>
        </Navbar>
    );
}