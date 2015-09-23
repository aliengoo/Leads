using Leads.Database.Models;

namespace Leads.Database.Collections
{
    using System.Collections.Generic;
    using System.Threading.Tasks;


    using MongoDB.Driver;

    public abstract class BaseCollection<TDoc> : IBaseCollection<TDoc>
        where TDoc : IDocument
    {
        // properties
        protected IMongoCollection<TDoc> Collection { get; }

        // constructor

        /// <summary>
        /// Creates a new instance
        /// </summary>
        /// <param name="collectionName">The collection name</param>
        /// <param name="leadsDatabase">The database</param>
        protected BaseCollection(string collectionName, ILeadsDatabase leadsDatabase)
        {
            Collection = leadsDatabase.Database.GetCollection<TDoc>(collectionName);
        }

        // methods
        public async virtual Task<TDoc> FindByIdAsync(string id)
        {
            return await Collection.Find(FindByIdFilter(id)).FirstOrDefaultAsync();
        }

        public async virtual Task<IEnumerable<TDoc>> FindAsync(FilterDefinition<TDoc> filter)
        {
            return await Collection.Find(filter).ToListAsync();
        }

        public async virtual Task<TDoc> SaveAsync(TDoc doc)
        {
            if (string.IsNullOrWhiteSpace(doc.Id))
            {
                await Collection.InsertOneAsync(doc);
            }
            else
            {
                await Collection.ReplaceOneAsync(FindByIdFilter(doc.Id), doc);
            }

            return doc;
        }

        public async virtual Task<bool> DeleteAsync(string id)
        {
            var deleteResult = await Collection.DeleteOneAsync(FindByIdFilter(id));

            return deleteResult.DeletedCount == 1;
        }

        public async Task<bool> Exists(FilterDefinition<TDoc> filter)
        {
            var count = await Collection.CountAsync(filter);

            return count > 0;
        }

        protected virtual FilterDefinition<TDoc> FindByIdFilter(string id)
        {
            return Builders<TDoc>.Filter.Eq(d => d.Id, id);
        }
    }
}