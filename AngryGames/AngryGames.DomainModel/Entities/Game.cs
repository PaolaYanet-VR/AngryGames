namespace AngryGames.DomainModel.Entities
{
    public class Game
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Developer { get; set; }
        public string Description { get; set; }
        public string ReleaseDate { get; set; }
        public string Category { get; set; }

        public Game(int id, string title, string developer, string description, string releaseDate, string category)
        {
            Id = id;
            Title = title;
            Developer = developer;
            Description = description;
            ReleaseDate = releaseDate;
            Category = category;
        }
    }
}
