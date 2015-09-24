using Leads.Configuration;
using Leads.Database.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Conventions;
using MongoDB.Driver;

namespace Leads.Database
{
	using Leads.Configuration.Application;

	public class LeadsDatabase : ILeadsDatabase
    {
        // fields
        private readonly IMongoDatabase _database;

        // properties
        public IMongoCollection<Customer> Customers => _database.GetCollection<Customer>("customers");

        public IMongoDatabase Database => _database;

        // constructors
		static LeadsDatabase()
		{
			// register the conventions
			var pack = new ConventionPack { new EnumRepresentationConvention(BsonType.String) };

			ConventionRegistry.Register("conventions", pack, t => true);
		}

		public LeadsDatabase(IApplicationConfiguration applicationConfiguration)
        {
            var url = MongoUrl.Create(applicationConfiguration.ConnectionString);
            _database = new MongoClient(url).GetDatabase(url.DatabaseName);
        }
    }
}