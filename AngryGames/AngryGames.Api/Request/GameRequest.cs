
namespace AngryGames.Api.Request
{
    public class GameRequest
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Developer { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public string ReleaseDate { get; set; }
        public string Category { get; set; }

        /*public GameRequest(string title, string developer, string image, string description, string releaseDate,string category)
        {
            Title = title;
            Developer = developer;
            Image = image;
            Description = description;
            ReleaseDate = releaseDate;
            Category = category;
        }*/
    }
}