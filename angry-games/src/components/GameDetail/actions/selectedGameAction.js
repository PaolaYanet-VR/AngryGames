export const GAME_SELECTED = 'GAME_SELECTED';

export default function selectedGameAction (gameId, titleText, developerText, imageText, descriptionText, releaseDateText, categoryText) {
    return {
        type: GAME_SELECTED,
        payload: {
            id: gameId,
            title: titleText,
            developer: developerText,
            image: imageText,
            description: descriptionText,
            releaseDate: releaseDateText,
            category: categoryText
        }
    };
}