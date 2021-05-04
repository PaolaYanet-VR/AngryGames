export const GAME_SELECTED = 'GAME_SELECTED';

export default function selectedGameAction (gameId) {
    return {
        type: GAME_SELECTED,
        payload: {
            id: gameId
        }
    };
}