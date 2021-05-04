import axios from 'axios';
import Game from '../representations/Game';
import ApiConfig from '../ApiConfig';

/*export default class GetGamesRequest {
    async execute() {
        const response = await axios.get('https://localhost:44370/api/games');

        return response.data.map(game => new Game(
            game.id,
            game.title,
            game.developer,
            game.image,
            game.description,
            game.releaseDate,
            game.category
        ));
    }
}*/

export default class GetGamesRequest {
    async send() {
        const response = await axios.get(ApiConfig.endpoints.games.get);
        return response.data.map(game => new Game(
            game.id,
            game.title,
            game.developer,
            game.image,
            game.description,
            game.releaseDate,
            game.category
        ));
    }
}
