using Leads.Database.Models;
using MongoDB.Driver;

namespace Leads.Database
{
    public interface ILeadsDatabase
    {
        IMongoCollection<Customer> Customers { get; } 

        IMongoDatabase Database { get; }
    }
}