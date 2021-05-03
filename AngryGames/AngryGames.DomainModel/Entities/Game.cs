namespace AngryGames.DomainModel.Entities
{
    public class Game
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Developer { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public string ReleaseDate { get; set; }
        public string Category { get; set; }

        public Game()
        {

        }

        public Game(int id, string title, string developer, string image, string description, string releaseDate, string category)
        {
            Id = id;
            Title = title;
            Developer = developer;
            Image = image;
            Description = description;
            ReleaseDate = releaseDate;
            Category = category;
        }
    }
}
