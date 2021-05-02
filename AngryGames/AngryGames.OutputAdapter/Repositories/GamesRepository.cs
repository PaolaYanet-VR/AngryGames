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


    }
}
