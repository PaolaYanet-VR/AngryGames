import Game from '../representations/Game';

export default class ConsultGamesRequest {
    execute(){
        return[
            new Game(1, 'title1', 'developer', 'image', 'description', 'releaseDate', 'category'),
            new Game(2, 'title2', 'developer', 'image', 'description', 'releaseDate', 'category'),
            new Game(3, 'title3', 'developer', 'image', 'description', 'releaseDate', 'category')
        ];
    }
}