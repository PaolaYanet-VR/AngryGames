using AngryGames.OutputAdapter.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace AngryGames.Api.Controllers
{
    [RoutePrefix("api/game")]
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

       
      
    }
}
