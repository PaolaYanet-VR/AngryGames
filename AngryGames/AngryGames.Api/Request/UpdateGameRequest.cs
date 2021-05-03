namespace AngryGames.Api.Request
{
    public class UpdateGameRequest
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Developer { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public string ReleaseDate { get; set; }
        public string Category { get; set; }
    }
}