import axios from 'axios';
import Game from '../representations/Game';

export default class GetGamesRequest {
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
}
