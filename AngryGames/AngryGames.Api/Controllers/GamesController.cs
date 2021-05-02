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
            var listGames = GamesRepository.ConsultGames();
            return Request.CreateResponse(HttpStatusCode.OK, listGames);

        }


    }
}
