import Game from '../representations/Game';

export default class ConsultGamesRequest {
    execute(){
        return[
            new Game(1, 'title1', 'developer', 'https://fress.co/wp-content/uploads/2014/05/fenomenos-naturales-19.jpg', 'description', 'releaseDate', 'category'),
            new Game(2, 'title2', 'developer', 'https://tse4.mm.bing.net/th?id=OIP.YGj4e_2KHVNMEOV1ci4kdgHaEn&pid=Api', 'description', 'releaseDate', 'category'),
            new Game(3, 'title3', 'developer', 'https://tse1.mm.bing.net/th?id=OIP.YW8de0GWZBBRKTxYtsyk0wHaFj&pid=Api', 'description', 'releaseDate', 'category')
        ];
    }
}