import axios from 'axios';
import ApiConfig from '../ApiConfig';
import Game from '../representations/Game';

export default class DeleteGameRequest {
    constructor(idGame) {
        this.idGame = idGame;
        const URLget = 'https://localhost:44370/api/games/' + idGame;
        this.URLget = URLget;
    }

    async send() {
        //console.log(this.idGame);
        const response = await axios.delete(this.URLget);
        return response.data;
    }
}