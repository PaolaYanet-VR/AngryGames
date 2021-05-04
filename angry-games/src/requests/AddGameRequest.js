import axios from 'axios';
import Game from '../representations/Game';
import ApiConfig from '../ApiConfig';

export default class AddGameRequest {
    constructor(title, developer, image, description, releaseDate, category) {
        this.title = title;
        this.developer = developer;
        this.image = image;
        this.description = description;
        this.releaseDate = releaseDate;
        this.category = category;
    }

    async send() {
        const response = await axios.post(ApiConfig.endpoints.games.add, {
            title: this.title,
            developer: this.developer,
            image: this.image, 
            description: this.description,
            releaseDate: this.releaseDate,
            category: this.category
        });
    }
}
