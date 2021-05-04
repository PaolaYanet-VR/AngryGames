import { GAME_SELECTED } from '../components/GameDetail/actions/selectedGameAction';

const initialState = [];

export default function gamesReducer(selectedGameState = initialState, action){
    switch(action.type){
        case GAME_SELECTED:
            return[
                action.payload
            ];
            default:
                return selectedGameState;

    }
}