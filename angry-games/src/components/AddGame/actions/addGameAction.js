export const GAME_ADDED = 'GAME_ADDED';

export default function addGameAction (titleText, developerText, imageText, descriptionText, releaseDateText, categoryText) {
    return {
        type: GAME_ADDED,
        payload: {
            title: titleText,
            developer: developerText,
            image: imageText,
            description: descriptionText,
            releaseDate: releaseDateText,
            category: categoryText
        }
    };
}