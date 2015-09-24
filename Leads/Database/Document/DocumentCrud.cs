namespace Leads.Database.Document
{
	using System.Collections.Generic;
	using System.Threading.Tasks;

	using global::Leads.Database.Models;
	using global::Leads.Pagination;

	using MongoDB.Bson;
	using MongoDB.Driver;

	public class DocumentCrud<TDoc> : IDocumentCrud<TDoc> where TDoc : IDocument
	{
		public IMongoCollection<TDoc> Collection { get; }

		public DocumentCrud(ILeadsDatabase leadsDatabase, string collectionName)
		{
			Collection = leadsDatabase.Database.GetCollection<TDoc>(collectionName);
		}

		public async Task<TDoc> CreateAsync(TDoc doc)
		{
			await Collection.InsertOneAsync(doc);

			return doc;
		}

		public async Task<TDoc> RetrieveAsync(string id)
		{
			var filter = Builders<TDoc>.Filter.Eq(t => t.Id, id);

			var result = await Collection.Find(filter).FirstOrDefaultAsync();

			return result;
		}

		public async Task<TDoc> UpdateAsync(TDoc doc)
		{
			var filter = Builders<TDoc>.Filter.Eq(t => t.Id, doc.Id);

			await Collection.ReplaceOneAsync(filter, doc, new UpdateOptions
			{
				IsUpsert = true
			});

			return doc;
		}

		public async Task DeleteAsync(string id)
		{
			var filter = Builders<TDoc>.Filter.Eq(t => t.Id, id);

			await Collection.DeleteOneAsync(filter);
		}

		public async Task<Page> RetrieveAsync(IDictionary<string, object> filter, Page page)
		{
			var filterDefinition = new BsonDocumentFilterDefinition<TDoc>(filter.ToBsonDocument());

			page.Results = await Collection
				.Find(filterDefinition)
				.Sort(page.CreateSortDefinition<TDoc>())
				.Skip((int)page.Skip)
				.Limit((int)page.Size)
				.ToListAsync();

			return page;
		}
	}
}