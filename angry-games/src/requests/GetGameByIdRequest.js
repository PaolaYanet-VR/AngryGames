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
    }

    async send() {
        console.log(this.idGame);
        const response = await axios.get(ApiConfig.endpoints.games.getById, this.idGame);
        const gameResponse = Game.fromApiResponse(response.data);
        return gameResponse;
    }
}
