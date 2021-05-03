import axios from 'axios';
import Game from '../representations/Game';

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
        const response = await axios.post(ApiConfig.endpoints.todos.add, {
            todoText: this.todoText,
            assignedUserId: this.assignedUserId
        });
        return Todo.fromApiResponse(response.data);
    }
}
