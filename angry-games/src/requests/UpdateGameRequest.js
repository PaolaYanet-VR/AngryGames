import axios from 'axios';
import Game from '../representations/Game';
import ApiConfig from '../ApiConfig';

export default class UpdateGameRequest {
    constructor(id, title, developer, image, description, releaseDate, category) {
        this.id = id;
        this.title = title;
        this.developer = developer;
        this.image = image;
        this.description = description;
        this.releaseDate = releaseDate;
        this.category = category;
        const URLget = 'https://localhost:44370/api/games/' + id;
        this.URLget = URLget;
    }

    async send() {
        const response = await axios.put(this.URLget, {
            id: this.id,
            title: this.title,
            developer: this.developer,
            image: this.image, 
            description: this.description,
            releaseDate: this.releaseDate,
            category: this.category
        });
    }
}