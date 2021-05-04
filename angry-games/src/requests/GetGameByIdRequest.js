import axios from 'axios';
import Game from '../representations/Game';
import { id } from '../components/GameDetail';
import { useSelector } from 'react-redux';



export function Kk() {
    const gameSelected = useSelector(state => state.selectedGame);
    return gameSelected;
}

export default class GetGameByIdRequest {
    async execute() {
        const kakita = Kk();
        const response = await axios.get('https://localhost:44370/api/games/id/'+kakita);
        
        return response.data;
    }
}
