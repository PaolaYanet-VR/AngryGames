using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System.Web.Http;

namespace AngryGames.Api
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Obtenemos la configuración para el serializador de JSON
            // este se va a encargar de convertir nuestros objetos de C# a notación JSON
            var formatters = GlobalConfiguration.Configuration.Formatters;
            var jsonFormatter = formatters.JsonFormatter;
            var settings = jsonFormatter.SerializerSettings;

            // quitamos el formateador de XML, puesto que nosotros solo queremos JSON
            settings.PreserveReferencesHandling = PreserveReferencesHandling.None;

            // estamos configurando la serialización de JSON
            // no guardar referencias a otros objetos en el JSON
            config.Formatters.Remove(config.Formatters.XmlFormatter);
            // no utilices ningun tipo de formateo especial, es decir, regresa el JSON más básico
            // sin intendaciones en una sola linea
            settings.Formatting = Formatting.None;
            // si alguna propiedad del objeto a serializar es nula, simplemente ignorala
            settings.NullValueHandling = NullValueHandling.Ignore;
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            // Habilita CORS en nuestra API
            // cors - concepto de API para ver quien puede acceder
            config.EnableCors();

            // configuramos las rutas de nuestros recursos
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
