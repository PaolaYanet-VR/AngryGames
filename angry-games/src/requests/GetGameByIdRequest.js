import axios from 'axios';
import Game from '../representations/Game';
import { id } from '../components/GameDetail';

export default class GetGameByIdRequest {
    async execute() {
        const response = await axios.get('https://localhost:44370/api/games/id/');

        return response.data;
    }
}
