import axios from 'axios';
import ApiConfig from '../ApiConfig';
import Game from '../representations/Game';

export default class DeleteGameRequest {
    constructor(idGame) {
        this.idGame = idGame;
    }

    async send() {
        console.log(this.idGame);
        const response = await axios.delete(ApiConfig.endpoints.games.delete, this.idGame);
        const gameResponse = Game.fromApiResponse(response.data);
        return gameResponse;
    }
}