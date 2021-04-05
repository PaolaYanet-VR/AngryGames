import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Navbar.css';

export default function NavGames() {
    return(
        <Navbar className="Nav">
            <Navbar.Brand className="Menu" href="#home">Angry Games</Navbar.Brand>
        </Navbar>
    );
}