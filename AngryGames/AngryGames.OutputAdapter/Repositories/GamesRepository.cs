using AngryGames.DomainModel.Entities;
using Dapper;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;

namespace AngryGames.OutputAdapter.Repositories
{
    public static class GamesRepository
    {
        public static readonly string ConnectionString = ConfigurationManager.ConnectionStrings["angry_games"].ToString();

        static MySqlConnection CreateConnection()
        {
            return new MySqlConnection(ConnectionString);
        }

        public static List<Game> ConsultGames()
        {
            using (var connection = CreateConnection())
            {
                return connection.Query<Game>("get_all_games", commandType: CommandType.StoredProcedure).AsList();
            }
        }

        public static Game ConsultGameByTitle(string title)
        {
            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();
                parameters.Add("_title", title);

                return connection.Query<Game>("get_game_by_title", parameters, commandType: CommandType.StoredProcedure).FirstOrDefault();
            }
        }

        public static Game ConsultGameByCategory(string category)
        {
            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();
                parameters.Add("_category", category);

                return connection.Query<Game>("get_game_by_category", parameters, commandType: CommandType.StoredProcedure).FirstOrDefault();
            }
        }

        public static Game ConsultGameById(int id)
        {
            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();
                parameters.Add("_id", id);

                return connection.Query<Game>("get_game_by_id", parameters, commandType: CommandType.StoredProcedure).FirstOrDefault();
            }
        }

        public static Game InsertGame(string title, string developer, string image, string description, string releaseDate, string category)
        {

            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();
                parameters.Add("_title", title);
                parameters.Add("_developer", developer);
                parameters.Add("_image", image);
                parameters.Add("_description", description);
                parameters.Add("_releaseData", releaseDate);
                parameters.Add("_category", category);
                parameters.Add("_id", DbType.Int32, direction: ParameterDirection.Output);

                //CONECTA LA BASE DE DATOS
                connection.Execute("add_game", parameters, commandType: System.Data.CommandType.StoredProcedure);

                var id = parameters.Get<int>("_id");

                return new Game(id, title, developer, image, description, releaseDate, category);

            }
        }

        public static Game UpdateGame(int id, string title, string developer, string image, string description, string releaseDate, string category)
        {

            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();
                parameters.Add("_id", id);
                parameters.Add("_title", title);
                parameters.Add("_developer", developer);
                parameters.Add("_image", image);
                parameters.Add("_description", description);
                parameters.Add("_releaseData", releaseDate);
                parameters.Add("_category", category);

                //CONECTA LA BASE DE DATOS
                connection.Execute("update_game", parameters, commandType: System.Data.CommandType.StoredProcedure);

                return new Game(id, title, developer, image, description, releaseDate, category);

            }
        }

        public static void DeleteGame(int id)
        {

            using (var connection = CreateConnection())
            {
                var parameters = new DynamicParameters();

                parameters.Add("_id", id);

                //CONECTA LA BASE DE DATOS
                connection.Execute("delete_game", parameters, commandType: System.Data.CommandType.StoredProcedure);


            }
        }

    }
}
