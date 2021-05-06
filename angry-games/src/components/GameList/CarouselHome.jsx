import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';


export default function CarouselHome() {
    return(
        <Carousel className="carousel">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.redd.it/i9iqra3s5y111.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>WELCOME TO ANGRY GAMES!</h3>
                <p>enjoy our service managing your games >:D</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://wallpaperaccess.com/full/5390869.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Little Nightmares II</h3>
                <p>Return to a captivating world of horror in Little Nightmares II</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="http://www.innersloth.com/Images/GAMES/AmongUs/2019_halloweenPromo.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>AMONG US</h3>
                <p>Play online or over local WiFi with 4-10 players as you attempt to prep your spaceship for departure</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}