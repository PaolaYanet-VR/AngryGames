/*import axios from 'axios';
import Game from '../representations/Game';
import { id } from '../components/GameDetail';
import { useSelector } from 'react-redux';



function obtenerId() {
    const gameSelected = useSelector(state => state.selectedGame);
    return gameSelected;
}

export default class GetGameByIdRequest {
    async execute() {
        //const selectedId = obtenerId();
        const response = await axios.get('https://localhost:44370/api/games/id/');
        
        return response.data;
    }
}*/

import axios from 'axios';
import ApiConfig from '../ApiConfig';
import Game from '../representations/Game';

export default class GetGameByIdRequest {
    constructor(idGame) {
        this.idGame = idGame;
        const URLget = 'https://localhost:44370/api/games/id/' + idGame;
        this.URLget = URLget;
    }

    async send() {
        //console.log(this.URLget);
        //const response = await axios.get(ApiConfig.endpoints.games.getById, this.idGame);
        let response = await axios.get(this.URLget);
        //const gameResponse = Game.fromApiResponse(response.data);
        return new Game(
            response.data.id,
            response.data.title,
            response.data.developer,
            response.data.image,
            response.data.description,
            response.data.releaseDate,
            response.data.category
        );
        //return gameResponse;
    }
}
