export default class ApiConfig {
    static baseUrl = 'https://localhost:44370';

    static get endpoints() {
        const gamesBasePath = `${ApiConfig.baseUrl}/api/games/`;
        return {
            games: {
                basePath: gamesBasePath,
                add: gamesBasePath + 'postd/',
                delete: gamesBasePath, //+ id
                get: gamesBasePath,
                getById: gamesBasePath + 'id/', //+ id
                getByCategory: gamesBasePath + 'category/', //+ category
                getByTitle: gamesBasePath + 'title/', //+ title
                update: gamesBasePath //+ id
            }
        };
    }
}
