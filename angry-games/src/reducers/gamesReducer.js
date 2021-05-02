import { GAME_ADDED } from '../components/AddGame/actions/addGameAction';

const initialState = [];

export default function gamesReducer(gamesState = initialState, action){
    switch(action.type){
        case GAME_ADDED:
            return[
                ...gamesState,
                action.payload
            ];
            default:
                return gamesState;

    }
}