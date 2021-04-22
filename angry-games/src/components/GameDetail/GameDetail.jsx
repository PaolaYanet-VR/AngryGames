import React from 'react';
import ConsultGamesRequest from '../../requests/ConsultGamesRequest';

export default function GameDetail(){
    var URLactual = window.location.href;

    var id = URLactual.split("http://localhost:3000/GameDetail/");
    const request = new ConsultGamesRequest();
    const games = request.execute();

    var gameSelected;

    games.forEach(element => {
        if(element.id == id){
            gameSelected = element;
        }
    });

    return(
        <div>
        </div>
    );
}