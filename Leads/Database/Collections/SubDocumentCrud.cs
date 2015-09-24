namespace Leads.Database.Collections
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Reflection;
	using System.Threading.Tasks;

	using Configuration.Attributes;
	using Exceptions;
	using Helpers;

	using Models;

	using MongoDB.Bson;
	using MongoDB.Bson.Serialization.IdGenerators;
	using MongoDB.Driver;

	public class SubDocumentCrud<TParentDoc, TDoc> : ISubDocumentCrud<TParentDoc, TDoc>
		where TParentDoc : class, IDocument
		where TDoc : class, ISubDocument
	{
		private readonly IDocumentCrud<TParentDoc> _documentCrud;

		private readonly IMongoCollection<TParentDoc> _collection;

		public PropertyInfo PropertyOnParent { get; }

		public SubDocumentCrud(
			IDocumentCrud<TParentDoc> documentCrud,
			string propertyNameOnParent,
			ILeadsDatabase leadsDatabase)
		{
			_documentCrud = documentCrud;

			var parentDocType = typeof(TParentDoc);

			// The parent document must have the property being updated
			if (parentDocType.HasProperty(propertyNameOnParent))
			{
				throw new DocumentPropertyNotFoundException(
					propertyNameOnParent,
					parentDocType,
					$"Unable to retrieve sub-document parent - {parentDocType.Name}.{PropertyOnParent} was not found");
			}

			PropertyOnParent = parentDocType.GetProperty(propertyNameOnParent);

			var parentCollectionName = CollectionNameAttribute.GetCollectionName(parentDocType);

			if (string.IsNullOrWhiteSpace(parentCollectionName))
			{
				throw new CollectionNotFoundException(
					string.Empty, 
					$"The collection was not found because the CollectionNameAttribute was not set on {parentDocType.FullName}");
			}

			_collection = leadsDatabase.Database.GetCollection<TParentDoc>(parentCollectionName);
		}

		public async Task<TDoc> CreateAsync(string parentId, TDoc doc)
		{
			// attempt to retrieve to ensure that everything checks out
			var parentDoc = await RetrieveParent(parentId);

			return await CreateAsync(parentDoc, doc);
		}

		private async Task<TDoc> CreateAsync(TParentDoc parentDoc, TDoc doc)
		{
			// assign a sub document id
			if (string.IsNullOrWhiteSpace(doc.Id))
			{
				await AssignSubDocumentId(doc);
			}

			doc.ParentId = parentDoc.Id;

			var filter = Builders<TParentDoc>.Filter.Eq(d => d.Id, parentDoc.Id);

			UpdateDefinition<TParentDoc> update = CreateUpdateDefinition(parentDoc);

			if (PropertyOnParent.IsEnumerable())
			{
				var fieldDefinition = new StringFieldDefinition<TParentDoc>(PropertyOnParent.Name);
				// push to array
				update.Push(fieldDefinition, doc);
			}
			else
			{
				// set - there is not individual document id
				var fieldDefinition = new StringFieldDefinition<TParentDoc, TDoc>(PropertyOnParent.Name);

				update.Set(fieldDefinition, doc);
			}

			await _collection.UpdateOneAsync(filter, update, new UpdateOptions
			{
				IsUpsert = false
			});

			return doc;
		}

		public async Task<TDoc> RetrieveAsync(string parentId, string id)
		{
			// attempt to retrieve to ensure that everything checks out
			var parentDoc = await RetrieveParent(parentId);

			var doc = default(TDoc);

			if (PropertyOnParent.IsEnumerable())
			{
				var docs = PropertyOnParent.GetValue(parentDoc) as IEnumerable<TDoc>;

				if (docs != null && docs.Any())
				{
					doc = docs.FirstOrDefault(d => d.Id == id);
				}
			}
			else
			{
				doc = PropertyOnParent.GetValue(parentDoc) as TDoc;
			}

			return doc;
		}

		public async Task<TDoc> UpdateAsync(string parentId, TDoc doc)
		{
			var parentDoc = await RetrieveParent(parentId);

			var filter = Builders<TParentDoc>.Filter.Eq(tpd => tpd.Id, parentId);

			if (PropertyOnParent.IsEnumerable())
			{
				// pull existing document from the collection
				// create it again
				
				var fieldDefinition = new StringFieldDefinition<TParentDoc>(PropertyOnParent.Name);

				var subFilter = Builders<TDoc>.Filter.Eq(d => d.Id, doc.Id);

				var update = CreateUpdateDefinition(parentDoc);

				update.PullFilter(fieldDefinition, subFilter);
				await _collection.UpdateOneAsync(filter, update, new UpdateOptions
																	{
																		IsUpsert = false
																	});
			}

			return await CreateAsync(parentDoc, doc);
		}

		public async Task DeleteAsync(string parentId, string id)
		{
			var parentDoc = await RetrieveParent(parentId);

			var filter = Builders<TParentDoc>.Filter.Eq(tpd => tpd.Id, parentId);

			var update = CreateUpdateDefinition(parentDoc);
			var fieldDefinition = new StringFieldDefinition<TParentDoc>(PropertyOnParent.Name);

			if (PropertyOnParent.IsEnumerable())
			{
				var subFilter = Builders<TDoc>.Filter.Eq(d => d.Id, id);
				update.PullFilter(fieldDefinition, subFilter);
			}
			else
			{
				update.Unset(fieldDefinition);
			}

			await _collection.UpdateOneAsync(filter, update, new UpdateOptions { IsUpsert = false });
		}

		/// <summary>
		/// Retrieves the parent document
		/// </summary>
		/// <param name="parentId"></param>
		/// <exception cref="Exception"></exception>
		/// <returns></returns>
		public async Task<TParentDoc> RetrieveParent(string parentId)
		{
			var parentDoc = await _documentCrud.RetrieveAsync(parentId);

			if (parentDoc == null)
			{
				throw new DocumentNotFoundException(
					parentId,
					$"Cannot create subdocument for parent document {parentId} "
					+ $"because the parent could not be found in {_collection.CollectionNamespace.FullName}");
			}

			return parentDoc;
		}

		public Task AssignSubDocumentId(TDoc doc)
		{
			return Task.Run(
				() =>
					{
						doc.Id = StringObjectIdGenerator.Instance.GenerateId(_collection, doc) as string;
					});
		}

		private static ObjectUpdateDefinition<TParentDoc> CreateUpdateDefinition(TParentDoc parentDoc)
		{
			return new ObjectUpdateDefinition<TParentDoc>(parentDoc);
		}
	}
}