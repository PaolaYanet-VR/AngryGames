export default class ApiConfig {
    static baseUrl = 'https://localhost:44370';

    static get endpoints() {
        const gamesBasePath = `${ApiConfig.baseUrl}/api/games`;
        return {
            games: {
                basePath: gamesBasePath,
                add: gamesBasePath,
                delete: gamesBasePath,
                get: gamesBasePath,
                getById: gamesBasePath,
                update: gamesBasePath
            }
        };
    }
}
