using AngryGames.Api.Request;
using AngryGames.OutputAdapter.Repositories;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AngryGames.Api.Controllers
{
    [RoutePrefix("api/games")]
    [EnableCors("*", "*", "*")]
    public class GamesController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage ObtainGames()
        {
            try
            {
                var listGames = GamesRepository.ConsultGames();
                return Request.CreateResponse(HttpStatusCode.OK, listGames);
            }
            catch (Exception e)
            {
                Console.WriteLine($"An Exception has been caught: {e.Message}");
                return Request.CreateResponse(HttpStatusCode.InternalServerError);
            }
        }

        [HttpGet]
        [Route("id/{id}")]
        public HttpResponseMessage ObtainGameById(int id)
        {
            try
            {
                var game = GamesRepository.ConsultGameById(id);

                if (game == null)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }

                return Request.CreateResponse(HttpStatusCode.OK, game);
            }
            catch (Exception e)
            {
                Console.WriteLine($"An Exception has been caught: {e.Message}");

                return Request.CreateResponse(HttpStatusCode.InternalServerError);
            }
        }

        [HttpGet]
        [Route("title/{title}")]
        public HttpResponseMessage ObtainGameByTitle(string title)
        {
            try
            {
                var game = GamesRepository.ConsultGameByTitle(title);

                if (game == null)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }

                return Request.CreateResponse(HttpStatusCode.OK, game);
            }
            catch (Exception e)
            {
                Console.WriteLine($"An Exception has been caught: {e.Message}");

                return Request.CreateResponse(HttpStatusCode.InternalServerError);
            }
        }

        [HttpGet]
        [Route("category/{category}")]
        public HttpResponseMessage ObtainGameByCategory(string category)
        {
            try
            {
                var game = GamesRepository.ConsultGameByCategory(category);

                if (game == null)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }

                return Request.CreateResponse(HttpStatusCode.OK, game);
            }
            catch (Exception e)
            {
                Console.WriteLine($"An Exception has been caught: {e.Message}");

                return Request.CreateResponse(HttpStatusCode.InternalServerError);
            }
        }

        [HttpPost]
        [Route("postd")]
        public HttpResponseMessage CreateGame([FromBody] GameRequest request)
        {
            try
            {
                var game = GamesRepository.InsertGame(request.Title, request.Developer, request.Image, request.Description, request.ReleaseDate, request.Category);

                return Request.CreateResponse(HttpStatusCode.OK, game);
            }
            catch (Exception e)
            {
                Console.WriteLine($"An Exception has been caught: {e.Message}");
                return Request.CreateResponse(HttpStatusCode.InternalServerError);
            }

        }

        [HttpPut]
        [Route("{id}")]
        public HttpResponseMessage UpdateGame([FromUri] int id, [FromBody] GameRequest request)
        {
            try
            {
                var game = GamesRepository.ConsultGameById(id);
                if (game == null)
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound);
                }

                game.Title = request.Title;
                game.Developer = request.Developer;
                game.Image = request.Image;
                game.Description = request.Description;
                game.ReleaseDate = request.ReleaseDate;
                game.Category = request.Category;

                GamesRepository.UpdateGame(id, request.Title, request.Developer, request.Image, request.Description, request.ReleaseDate, request.Category);


                return Request.CreateResponse(HttpStatusCode.OK, game);
            }
            catch (Exception e)
            {
                Console.WriteLine($"An Exception has been caught: {e.Message}");
                return Request.CreateResponse(HttpStatusCode.InternalServerError);
            }


        }

        [HttpDelete]
        [Route("{id}")]
        public HttpResponseMessage DeleteGame(int id)
        {

            try
            {
                GamesRepository.DeleteGame(id);

                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (Exception e)
            {
                Console.WriteLine($"An Exception has been caught: {e.Message}");
                return Request.CreateResponse(HttpStatusCode.InternalServerError);
            }

        }

    }

}
