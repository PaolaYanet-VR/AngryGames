import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import selectedGameReducer from './selectedGameReducer';

const rootReducer = combineReducers({
    games: gamesReducer,
    selectedGame: selectedGameReducer
});

export default rootReducer;