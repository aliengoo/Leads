namespace Leads.Database.Collections
{
	using System.Threading.Tasks;

	using Models;

	using MongoDB.Driver;

	public class DocumentCrud<TDoc> : IDocumentCrud<TDoc> where TDoc : IDocument
	{
		private readonly IMongoCollection<TDoc> _collection;

		public DocumentCrud(ILeadsDatabase leadsDatabase, string collectionName)
		{
			_collection = leadsDatabase.Database.GetCollection<TDoc>(collectionName);
		}

		public async Task<TDoc> CreateAsync(TDoc doc)
		{
			await _collection.InsertOneAsync(doc);

			return doc;
		}

		public async Task<TDoc> RetrieveAsync(string id)
		{
			var filter = Builders<TDoc>.Filter.Eq(t => t.Id, id);

			var result = await _collection.Find(filter).FirstOrDefaultAsync();

			return result;
		}

		public async Task<TDoc> UpdateAsync(TDoc doc)
		{
			var filter = Builders<TDoc>.Filter.Eq(t => t.Id, doc.Id);

			await _collection.ReplaceOneAsync(filter, doc, new UpdateOptions
			{
				IsUpsert = true
			});

			return doc;
		}

		public async Task DeleteAsync(string id)
		{
			var filter = Builders<TDoc>.Filter.Eq(t => t.Id, id);

			await _collection.DeleteOneAsync(filter);
		}
	}
}